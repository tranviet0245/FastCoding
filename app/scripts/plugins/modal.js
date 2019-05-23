import layout from '../utils/layout';


@Wrapper
export default class Modal extends Plugin {
  init () {
    const $ele = this.$element;
    const pluginName = this.options.pluginName;
    const $target = $($ele.attr('data-target'));

    $ele.on(`click.${pluginName}`, () => {
      $target.addClass('active');
      layout.freeze();
    });

    $target.on(`click`, '.btn-close-modal', () => {
      layout.unfreeze();
      $target.removeClass('active');
    });
  }
}
