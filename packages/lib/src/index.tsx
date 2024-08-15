// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component, HTMLAttributes, MouseEvent } from 'react';
import ReactList, { TemplateArgs, ReactListProps } from '@jswork/react-list';

const CLASS_NAME = 'react-slide-nav';

type ReactSlideNavTemplateArgs = TemplateArgs & {
  active: boolean;
  activeClassName?: string;
  cb: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export type ReactSlideNavTemplate = (args: ReactSlideNavTemplateArgs) => ReactNode;

export type ReactSlideNavProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * The activeClassName for active item.
   */
  activeClassName?: string;
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The items of spy navigation.
   */
  items: any[];
  /**
   * The template function for rendering each item.
   */
  template?: ReactSlideNavTemplate;
  /**
   * The callback when item is clicked.
   * @param event
   */
  onChange?: (index: number) => void;
  /**
   * The props for react-list.
   */
  listProps?: Omit<ReactListProps, 'items' | 'template'>;
} & HTMLAttributes<HTMLDivElement>;

const defaultTemplate: ReactSlideNavTemplate = (args) => {
  const { item, index, active, activeClassName, cb } = args;

  return <a
    data-role="nav-item"
    className={cx(`${CLASS_NAME}__item`, { [activeClassName as string]: active })}
    data-index={index}
    key={index}
    onClick={cb}
  >
    {item}
  </a>;
};

export default class ReactSlideNav extends Component<ReactSlideNavProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    activeClassName: 'is-active',
    items: [],
    template: defaultTemplate,
  };

  private rootRef = React.createRef<HTMLDivElement>();

  state = {
    activeIndex: -1,
    animation: false,
  };

  get root() {
    return this.rootRef.current;
  }

  get activeItem() {
    const root = this.root;
    const { activeIndex } = this.state;
    if (!root || activeIndex < 0) return null;
    const els = this.root.querySelectorAll('[data-role="nav-item"]');
    const activeElement = els[activeIndex] as HTMLElement;
    return {
      left: activeElement.offsetLeft,
      width: activeElement.offsetWidth,
    };
  }

  componentDidMount() {
    this.setState({ activeIndex: 0 }, () => {
      this.setState({ animation: true });
    });
  }

  handleTemplate = (args: TemplateArgs) => {
    const { index } = args;
    const { activeIndex } = this.state;
    const { activeClassName, template, onChange } = this.props;
    const active = index === activeIndex;
    const cb = (event: MouseEvent<HTMLAnchorElement>) => {
      const index = event.currentTarget.getAttribute('data-index');
      const idx = Number(index);
      this.setState({ activeIndex: idx }, () => {
        onChange?.(idx);
      });
    };
    return template?.({ ...args, active, activeClassName, cb });
  };

  render() {
    const { className, activeClassName, children, items, template, onChange, listProps, ...rest } = this.props;
    const { animation, activeIndex } = this.state;
    return (
      <nav
        ref={this.rootRef}
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        data-active-index={activeIndex}
        data-animation={animation}
        style={{
          // @ts-ignore
          '--decoration-left': `${this.activeItem?.left || 0}px`,
          '--decoration-width': `${this.activeItem?.width || 0}px`,
        }}
        {...rest}
      >
        <ReactList items={items} template={this.handleTemplate} {...listProps} />
      </nav>
    );
  }
}
