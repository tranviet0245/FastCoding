@Wrapper
export default class Anchor extends Plugin {
  init () {
    const $ele = this.$element;
    const pluginName = this.options.pluginName;
    const $listSection = $('section');
    const duration = 500;
    $ele
      .off(`click.${pluginName}`)
      .on(`click.${pluginName}`, '.btn-anchor', (e) => {
        let $currTarget = $(e.currentTarget);
        let num = $currTarget.attr('data-section');
        let space = $($listSection[num - 1]).offset().top;

        $('html, body').animate({scrollTop: space}, duration);
      });
  }
}
