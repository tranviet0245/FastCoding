@Wrapper
export default class LoadItems extends Plugin {
  init () {
    this.$ele = this.$element;
    this.$wrap = this.$ele.find('.list-works');
    this.$btnLoad = this.$ele.find('.load-more');
    this.$loading = this.$ele.find('[data-icon]');
    this.currentPage = 0;
    this.getData();

    this.$btnLoad.on(`click`, () => {
      this.$loading.addClass('d-none');
      this.renderItem();
    });
  }

  renderItem() {
    const { $wrap, items, currentPage, options } = this;
    const { itemsPerPage } = options;

    const html = this.initalizingItem(items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));

    $wrap.append(html);
    this.currentPage++;
    if (this.currentPage * itemsPerPage >= this.items.length) {
      this.$btnLoad.addClass('d-none');
    } else {
      this.$btnLoad.removeClass('d-none');
    }
  };

  getData() {
    const { url, method } = this.options;

    $.ajax({
      method,
      url,
    }).done( (res) => {
      this.items = res.data;
      this.renderItem();
      this.$loading.addClass('d-none');
    });
  };

  initalizingItem(items) {
    return items.map( ({img, title, description}) => {
      return `
        <li class="item"><img class="background" src=${img} alt="background">
          <div class="item-content">
            <h3 class="item-title">${title}</h3>
            <p class="item-description">${description}</p>
            <a href="#" class="btn item-btn"><span class="text">Show project</span></a>
          </div>
        </li>
      `;
    }).join('');
  };
}
