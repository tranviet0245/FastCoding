@Wrapper
export default class ActiveMembers extends Plugin {
  init () {
    const $ele = this.$element;
    const pluginName = this.options.pluginName;
    const $members = $ele.find('.member');
    const $listDots = $ele.find('.dot-item');
    const defaultActive = $ele.attr('data-active');

    $ele
      .off(`click.${pluginName}`)
      .on(`click.${pluginName}`, '.dot-item', (e) => {
        let $currentDot = $(e.currentTarget);
        let num = $currentDot.index();
        let $currentMember = $members.eq(num);

        $members.not($currentMember).removeClass('active');
        $members.eq(num).addClass('active');
        $listDots.not($currentDot).removeClass('active');
        $currentDot.addClass('active');
      });

    $($listDots[defaultActive - 1]).trigger('click');
  }
}
