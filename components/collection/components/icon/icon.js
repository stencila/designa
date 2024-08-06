import { Component, getAssetPath, h, Host, Prop } from '@stencil/core';
import wretch from 'wretch';
import { isSuffixedIconName, isUnsuffixedIconName, } from './iconNames';
let isFetchingIcons = false;
const getGlobalIconStyle = () => document.getElementsByTagName('html')[0].getAttribute('data-icon-style') ===
  'fill'
  ? 'fill'
  : 'line';
export class Icon {
  constructor() {
    /**
     * Style with which to render the icon
     */
    this.iconStyle = getGlobalIconStyle();
    /**
     * The URL of the SVG file containing icon symbols
     */
    this.iconUrl = getAssetPath(`./assets/remixicon.symbol.svg`);
    this.fetchIcons = async () => {
      const response = await wretch()
        .url(this.iconUrl)
        .options({ credentials: 'omit', mode: 'cors' })
        .get()
        .text();
      const div = document.createElement('div');
      div.innerHTML = response;
      document.body.append(div);
    };
  }
  componentWillLoad() {
    if (!isFetchingIcons) {
      isFetchingIcons = true;
      this.fetchIcons().catch((err) => {
        console.log('Failed to load icons', err);
      });
    }
  }
  render() {
    const iconName = isSuffixedIconName(this.icon)
      ? `#ri-${this.icon}-${this.iconStyle}`
      : isUnsuffixedIconName(this.icon)
        ? `#ri-${this.icon}`
        : this.icon;
    return (h(Host, { icon: this.icon, "aria-hidden": "true" },
      h("svg", { style: {
          fill: this.color !== undefined
            ? `var(--color-${this.color})`
            : undefined,
        } },
        h("use", { href: iconName }))));
  }
  static get is() { return "stencila-icon"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["icon.css"],
    "material": ["icon.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["icon.css"],
    "material": ["icon.material.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconNames",
        "resolved": "\"function\" | \"key\" | \"stock\" | \"a-b\" | \"align-bottom\" | \"align-center\" | \"align-justify\" | \"align-left\" | \"align-right\" | \"align-top\" | \"align-vertically\" | \"asterisk\" | \"attachment-2\" | \"bold\" | \"bring-forward\" | \"bring-to-front\" | \"code-view\" | \"delete-column\" | \"delete-row\" | \"double-quotes-l\" | \"double-quotes-r\" | \"emphasis-cn\" | \"emphasis\" | \"english-input\" | \"flow-chart\" | \"font-color\" | \"font-size-2\" | \"font-size\" | \"format-clear\" | \"functions\" | \"h-1\" | \"h-2\" | \"h-3\" | \"h-4\" | \"h-5\" | \"h-6\" | \"hashtag\" | \"heading\" | \"indent-decrease\" | \"indent-increase\" | \"input-cursor-move\" | \"insert-column-left\" | \"insert-column-right\" | \"insert-row-bottom\" | \"insert-row-top\" | \"italic\" | \"line-height\" | \"link-m\" | \"link-unlink-m\" | \"link-unlink\" | \"link\" | \"list-check-2\" | \"list-check\" | \"list-ordered\" | \"list-unordered\" | \"merge-cells-horizontal\" | \"merge-cells-vertical\" | \"mind-map\" | \"node-tree\" | \"number-0\" | \"number-1\" | \"number-2\" | \"number-3\" | \"number-4\" | \"number-5\" | \"number-6\" | \"number-7\" | \"number-8\" | \"number-9\" | \"omega\" | \"organization-chart\" | \"page-separator\" | \"paragraph\" | \"pinyin-input\" | \"question-mark\" | \"rounded-corner\" | \"safafill\" | \"safaline\" | \"send-backward\" | \"send-to-back\" | \"separator\" | \"single-quotes-l\" | \"single-quotes-r\" | \"sort-asc\" | \"sort-desc\" | \"space\" | \"split-cells-horizontal\" | \"split-cells-vertical\" | \"strikethrough-2\" | \"strikethrough\" | \"subscript-2\" | \"subscript\" | \"superscript-2\" | \"superscript\" | \"table-2\" | \"text-direction-l\" | \"text-direction-r\" | \"text-spacing\" | \"text-wrap\" | \"text\" | \"translate-2\" | \"translate\" | \"underline\" | \"wubi-input\" | \"24-hours\" | \"4k\" | \"account-box\" | \"account-circle\" | \"account-pin-box\" | \"account-pin-circle\" | \"add-box\" | \"add-circle\" | \"add\" | \"admin\" | \"advertisement\" | \"airplay\" | \"alarm\" | \"alarm-warning\" | \"album\" | \"alert\" | \"aliens\" | \"alipay\" | \"amazon\" | \"anchor\" | \"ancient-gate\" | \"ancient-pavilion\" | \"android\" | \"angularjs\" | \"anticlockwise-2\" | \"anticlockwise\" | \"app-store\" | \"apple\" | \"apps-2\" | \"apps\" | \"archive-drawer\" | \"archive\" | \"arrow-down-circle\" | \"arrow-down\" | \"arrow-down-s\" | \"arrow-drop-down\" | \"arrow-drop-left\" | \"arrow-drop-right\" | \"arrow-drop-up\" | \"arrow-go-back\" | \"arrow-go-forward\" | \"arrow-left-circle\" | \"arrow-left-down\" | \"arrow-left\" | \"arrow-left-right\" | \"arrow-left-s\" | \"arrow-left-up\" | \"arrow-right-circle\" | \"arrow-right-down\" | \"arrow-right\" | \"arrow-right-s\" | \"arrow-right-up\" | \"arrow-up-circle\" | \"arrow-up-down\" | \"arrow-up\" | \"arrow-up-s\" | \"artboard-2\" | \"artboard\" | \"article\" | \"aspect-ratio\" | \"at\" | \"attachment\" | \"auction\" | \"award\" | \"baidu\" | \"ball-pen\" | \"bank-card-2\" | \"bank-card\" | \"bank\" | \"bar-chart-2\" | \"bar-chart-box\" | \"bar-chart-grouped\" | \"bar-chart-horizontal\" | \"bar-chart\" | \"barcode-box\" | \"barcode\" | \"barricade\" | \"base-station\" | \"basketball\" | \"battery-2-charge\" | \"battery-2\" | \"battery-charge\" | \"battery\" | \"battery-low\" | \"battery-saver\" | \"battery-share\" | \"bear-smile\" | \"behance\" | \"bell\" | \"bike\" | \"bilibili\" | \"bill\" | \"billiards\" | \"bit-coin\" | \"blaze\" | \"bluetooth-connect\" | \"bluetooth\" | \"blur-off\" | \"body-scan\" | \"book-2\" | \"book-3\" | \"book\" | \"book-mark\" | \"book-open\" | \"book-read\" | \"booklet\" | \"bookmark-2\" | \"bookmark-3\" | \"bookmark\" | \"boxing\" | \"braces\" | \"brackets\" | \"briefcase-2\" | \"briefcase-3\" | \"briefcase-4\" | \"briefcase-5\" | \"briefcase\" | \"broadcast\" | \"brush-2\" | \"brush-3\" | \"brush-4\" | \"brush\" | \"bubble-chart\" | \"bug-2\" | \"bug\" | \"building-2\" | \"building-3\" | \"building-4\" | \"building\" | \"bus-2\" | \"bus\" | \"bus-wifi\" | \"cactus\" | \"cake-2\" | \"cake-3\" | \"cake\" | \"calculator\" | \"calendar-2\" | \"calendar-check\" | \"calendar-event\" | \"calendar\" | \"calendar-todo\" | \"camera-2\" | \"camera-3\" | \"camera-lens\" | \"camera\" | \"camera-off\" | \"camera-switch\" | \"capsule\" | \"car\" | \"car-washing\" | \"caravan\" | \"cast\" | \"cellphone\" | \"celsius\" | \"centos\" | \"character-recognition\" | \"charging-pile-2\" | \"charging-pile\" | \"chat-1\" | \"chat-2\" | \"chat-3\" | \"chat-4\" | \"chat-check\" | \"chat-delete\" | \"chat-download\" | \"chat-follow-up\" | \"chat-forward\" | \"chat-heart\" | \"chat-history\" | \"chat-new\" | \"chat-off\" | \"chat-poll\" | \"chat-private\" | \"chat-quote\" | \"chat-settings\" | \"chat-smile-2\" | \"chat-smile-3\" | \"chat-smile\" | \"chat-upload\" | \"chat-voice\" | \"check-double\" | \"check\" | \"checkbox-blank-circle\" | \"checkbox-blank\" | \"checkbox-circle\" | \"checkbox-indeterminate\" | \"checkbox\" | \"checkbox-multiple-blank\" | \"checkbox-multiple\" | \"china-railway\" | \"chrome\" | \"clapperboard\" | \"clipboard\" | \"clockwise-2\" | \"clockwise\" | \"close-circle\" | \"close\" | \"closed-captioning\" | \"cloud\" | \"cloud-off\" | \"cloud-windy\" | \"cloudy-2\" | \"cloudy\" | \"code-box\" | \"code\" | \"code-s\" | \"code-s-slash\" | \"codepen\" | \"coin\" | \"coins\" | \"collage\" | \"command\" | \"community\" | \"compass-2\" | \"compass-3\" | \"compass-4\" | \"compass-discover\" | \"compass\" | \"compasses-2\" | \"compasses\" | \"computer\" | \"contacts-book-2\" | \"contacts-book\" | \"contacts-book-upload\" | \"contacts\" | \"contrast-2\" | \"contrast-drop-2\" | \"contrast-drop\" | \"contrast\" | \"copper-coin\" | \"copper-diamond\" | \"copyleft\" | \"copyright\" | \"coreos\" | \"coupon-2\" | \"coupon-3\" | \"coupon-4\" | \"coupon-5\" | \"coupon\" | \"cpu\" | \"creative-commons-by\" | \"creative-commons\" | \"creative-commons-nc\" | \"creative-commons-nd\" | \"creative-commons-sa\" | \"creative-commons-zero\" | \"criminal\" | \"crop-2\" | \"crop\" | \"css3\" | \"cup\" | \"currency\" | \"cursor\" | \"customer-service-2\" | \"customer-service\" | \"dashboard-2\" | \"dashboard-3\" | \"dashboard\" | \"database-2\" | \"database\" | \"delete-back-2\" | \"delete-back\" | \"delete-bin-2\" | \"delete-bin-3\" | \"delete-bin-4\" | \"delete-bin-5\" | \"delete-bin-6\" | \"delete-bin-7\" | \"delete-bin\" | \"device\" | \"device-recover\" | \"dingding\" | \"direction\" | \"disc\" | \"discord\" | \"discuss\" | \"dislike\" | \"disqus\" | \"divide\" | \"donut-chart\" | \"door-closed\" | \"door\" | \"door-lock-box\" | \"door-lock\" | \"door-open\" | \"dossier\" | \"douban\" | \"download-2\" | \"download-cloud-2\" | \"download-cloud\" | \"download\" | \"draft\" | \"drag-drop\" | \"drag-move-2\" | \"drag-move\" | \"dribbble\" | \"drive\" | \"drizzle\" | \"drop\" | \"dropbox\" | \"dual-sim-1\" | \"dual-sim-2\" | \"dv\" | \"dvd\" | \"e-bike-2\" | \"e-bike\" | \"earth\" | \"earthquake\" | \"edge\" | \"edit-2\" | \"edit-box\" | \"edit-circle\" | \"edit\" | \"eject\" | \"emotion-2\" | \"emotion-happy\" | \"emotion-laugh\" | \"emotion\" | \"emotion-normal\" | \"emotion-sad\" | \"emotion-unhappy\" | \"empathize\" | \"equalizer\" | \"eraser\" | \"error-warning\" | \"evernote\" | \"exchange-box\" | \"exchange-cny\" | \"exchange-dollar\" | \"exchange-funds\" | \"exchange\" | \"external-link\" | \"eye-2\" | \"eye-close\" | \"eye\" | \"eye-off\" | \"facebook-box\" | \"facebook-circle\" | \"facebook\" | \"fahrenheit\" | \"feedback\" | \"file-2\" | \"file-3\" | \"file-4\" | \"file-add\" | \"file-chart-2\" | \"file-chart\" | \"file-cloud\" | \"file-code\" | \"file-copy-2\" | \"file-copy\" | \"file-damage\" | \"file-download\" | \"file-edit\" | \"file-excel-2\" | \"file-excel\" | \"file-forbid\" | \"file-gif\" | \"file-history\" | \"file-hwp\" | \"file-info\" | \"file\" | \"file-list-2\" | \"file-list-3\" | \"file-list\" | \"file-lock\" | \"file-mark\" | \"file-music\" | \"file-paper-2\" | \"file-paper\" | \"file-pdf\" | \"file-ppt-2\" | \"file-ppt\" | \"file-reduce\" | \"file-search\" | \"file-settings\" | \"file-shield-2\" | \"file-shield\" | \"file-shred\" | \"file-text\" | \"file-transfer\" | \"file-unknow\" | \"file-upload\" | \"file-user\" | \"file-warning\" | \"file-word-2\" | \"file-word\" | \"file-zip\" | \"film\" | \"filter-2\" | \"filter-3\" | \"filter\" | \"filter-off\" | \"find-replace\" | \"finder\" | \"fingerprint-2\" | \"fingerprint\" | \"fire\" | \"firefox\" | \"first-aid-kit\" | \"flag-2\" | \"flag\" | \"flashlight\" | \"flask\" | \"flight-land\" | \"flight-takeoff\" | \"flood\" | \"flutter\" | \"focus-2\" | \"focus-3\" | \"focus\" | \"foggy\" | \"folder-2\" | \"folder-3\" | \"folder-4\" | \"folder-5\" | \"folder-add\" | \"folder-chart-2\" | \"folder-chart\" | \"folder-download\" | \"folder-forbid\" | \"folder-history\" | \"folder-info\" | \"folder-keyhole\" | \"folder\" | \"folder-lock\" | \"folder-music\" | \"folder-open\" | \"folder-received\" | \"folder-reduce\" | \"folder-settings\" | \"folder-shared\" | \"folder-shield-2\" | \"folder-shield\" | \"folder-transfer\" | \"folder-unknow\" | \"folder-upload\" | \"folder-user\" | \"folder-warning\" | \"folder-zip\" | \"folders\" | \"football\" | \"footprint\" | \"forbid-2\" | \"forbid\" | \"fridge\" | \"fullscreen-exit\" | \"fullscreen\" | \"funds-box\" | \"funds\" | \"gallery\" | \"gallery-upload\" | \"game\" | \"gamepad\" | \"gas-station\" | \"gatsby\" | \"genderless\" | \"ghost-2\" | \"ghost\" | \"ghost-smile\" | \"gift-2\" | \"gift\" | \"git-branch\" | \"git-commit\" | \"git-merge\" | \"git-pull-request\" | \"git-repository-commits\" | \"git-repository\" | \"git-repository-private\" | \"github\" | \"gitlab\" | \"global\" | \"globe\" | \"goblet\" | \"google\" | \"google-play\" | \"government\" | \"gps\" | \"gradienter\" | \"grid\" | \"group-2\" | \"group\" | \"guide\" | \"hail\" | \"hammer\" | \"hand-coin\" | \"hand-heart\" | \"hand-sanitizer\" | \"handbag\" | \"hard-drive-2\" | \"hard-drive\" | \"haze-2\" | \"haze\" | \"hd\" | \"headphone\" | \"health-book\" | \"heart-2\" | \"heart-3\" | \"heart-add\" | \"heart\" | \"heart-pulse\" | \"hearts\" | \"heavy-showers\" | \"history\" | \"home-2\" | \"home-3\" | \"home-4\" | \"home-5\" | \"home-6\" | \"home-7\" | \"home-8\" | \"home-gear\" | \"home-heart\" | \"home\" | \"home-smile-2\" | \"home-smile\" | \"home-wifi\" | \"honor-of-kings\" | \"honour\" | \"hospital\" | \"hotel-bed\" | \"hotel\" | \"hotspot\" | \"hq\" | \"html5\" | \"ie\" | \"image-2\" | \"image-add\" | \"image-edit\" | \"image\" | \"inbox-archive\" | \"inbox\" | \"inbox-unarchive\" | \"increase-decrease\" | \"indeterminate-circle\" | \"information\" | \"infrared-thermometer\" | \"ink-bottle\" | \"input-method\" | \"instagram\" | \"install\" | \"invision\" | \"kakao-talk\" | \"key-2\" | \"keyboard-box\" | \"keyboard\" | \"keynote\" | \"knife-blood\" | \"knife\" | \"landscape\" | \"layout-2\" | \"layout-3\" | \"layout-4\" | \"layout-5\" | \"layout-6\" | \"layout-bottom-2\" | \"layout-bottom\" | \"layout-column\" | \"layout-grid\" | \"layout-left-2\" | \"layout-left\" | \"layout\" | \"layout-masonry\" | \"layout-right-2\" | \"layout-right\" | \"layout-row\" | \"layout-top-2\" | \"layout-top\" | \"leaf\" | \"lifebuoy\" | \"lightbulb-flash\" | \"lightbulb\" | \"line-chart\" | \"line\" | \"linkedin-box\" | \"linkedin\" | \"links\" | \"list-settings\" | \"live\" | \"loader-2\" | \"loader-3\" | \"loader-4\" | \"loader-5\" | \"loader\" | \"lock-2\" | \"lock\" | \"lock-password\" | \"lock-unlock\" | \"login-box\" | \"login-circle\" | \"logout-box\" | \"logout-box-r\" | \"logout-circle\" | \"logout-circle-r\" | \"luggage-cart\" | \"luggage-deposit\" | \"lungs\" | \"mac\" | \"macbook\" | \"magic\" | \"mail-add\" | \"mail-check\" | \"mail-close\" | \"mail-download\" | \"mail-forbid\" | \"mail\" | \"mail-lock\" | \"mail-open\" | \"mail-send\" | \"mail-settings\" | \"mail-star\" | \"mail-unread\" | \"mail-volume\" | \"map-2\" | \"map\" | \"map-pin-2\" | \"map-pin-3\" | \"map-pin-4\" | \"map-pin-5\" | \"map-pin-add\" | \"map-pin\" | \"map-pin-range\" | \"map-pin-time\" | \"map-pin-user\" | \"mark-pen\" | \"markdown\" | \"markup\" | \"mastercard\" | \"mastodon\" | \"medal-2\" | \"medal\" | \"medicine-bottle\" | \"medium\" | \"men\" | \"mental-health\" | \"menu-2\" | \"menu-3\" | \"menu-4\" | \"menu-5\" | \"menu-add\" | \"menu-fold\" | \"menu\" | \"menu-unfold\" | \"message-2\" | \"message-3\" | \"message\" | \"messenger\" | \"meteor\" | \"mic-2\" | \"mic\" | \"mic-off\" | \"mickey\" | \"microscope\" | \"microsoft\" | \"mini-program\" | \"mist\" | \"money-cny-box\" | \"money-cny-circle\" | \"money-dollar-box\" | \"money-dollar-circle\" | \"money-euro-box\" | \"money-euro-circle\" | \"money-pound-box\" | \"money-pound-circle\" | \"moon-clear\" | \"moon-cloudy\" | \"moon-foggy\" | \"moon\" | \"more-2\" | \"more\" | \"motorbike\" | \"mouse\" | \"movie-2\" | \"movie\" | \"music-2\" | \"music\" | \"mv\" | \"navigation\" | \"netease-cloud-music\" | \"netflix\" | \"newspaper\" | \"notification-2\" | \"notification-3\" | \"notification-4\" | \"notification-badge\" | \"notification\" | \"notification-off\" | \"npmjs\" | \"numbers\" | \"nurse\" | \"oil\" | \"open-arm\" | \"open-source\" | \"opera\" | \"order-play\" | \"outlet-2\" | \"outlet\" | \"pages\" | \"paint-brush\" | \"paint\" | \"palette\" | \"pantone\" | \"parent\" | \"parentheses\" | \"parking-box\" | \"parking\" | \"passport\" | \"patreon\" | \"pause-circle\" | \"pause\" | \"pause-mini\" | \"paypal\" | \"pen-nib\" | \"pencil\" | \"pencil-ruler-2\" | \"pencil-ruler\" | \"percent\" | \"phone-camera\" | \"phone-find\" | \"phone\" | \"phone-lock\" | \"picture-in-picture-2\" | \"picture-in-picture-exit\" | \"picture-in-picture\" | \"pie-chart-2\" | \"pie-chart-box\" | \"pie-chart\" | \"pin-distance\" | \"ping-pong\" | \"pinterest\" | \"pixelfed\" | \"plane\" | \"plant\" | \"play-circle\" | \"play\" | \"play-list-2\" | \"play-list-add\" | \"play-list\" | \"play-mini\" | \"playstation\" | \"plug-2\" | \"plug\" | \"polaroid-2\" | \"polaroid\" | \"police-car\" | \"price-tag-2\" | \"price-tag-3\" | \"price-tag\" | \"printer-cloud\" | \"printer\" | \"product-hunt\" | \"profile\" | \"projector-2\" | \"projector\" | \"psychotherapy\" | \"pulse\" | \"pushpin-2\" | \"pushpin\" | \"qq\" | \"qr-code\" | \"qr-scan-2\" | \"qr-scan\" | \"question-answer\" | \"question\" | \"questionnaire\" | \"quill-pen\" | \"radar\" | \"radio-2\" | \"radio-button\" | \"radio\" | \"rainbow\" | \"rainy\" | \"reactjs\" | \"record-circle\" | \"record-mail\" | \"recycle\" | \"red-packet\" | \"reddit\" | \"refresh\" | \"refund-2\" | \"refund\" | \"registered\" | \"remixicon\" | \"remote-control-2\" | \"remote-control\" | \"repeat-2\" | \"repeat\" | \"repeat-one\" | \"reply-all\" | \"reply\" | \"reserved\" | \"rest-time\" | \"restart\" | \"restaurant-2\" | \"restaurant\" | \"rewind\" | \"rewind-mini\" | \"rhythm\" | \"riding\" | \"road-map\" | \"roadster\" | \"robot\" | \"rocket-2\" | \"rocket\" | \"rotate-lock\" | \"route\" | \"router\" | \"rss\" | \"ruler-2\" | \"ruler\" | \"run\" | \"safe-2\" | \"safe\" | \"sailboat\" | \"save-2\" | \"save-3\" | \"save\" | \"scales-2\" | \"scales-3\" | \"scales\" | \"scan-2\" | \"scan\" | \"scissors-2\" | \"scissors-cut\" | \"scissors\" | \"screenshot-2\" | \"screenshot\" | \"sd-card\" | \"sd-card-mini\" | \"search-2\" | \"search-eye\" | \"search\" | \"secure-payment\" | \"seedling\" | \"send-plane-2\" | \"send-plane\" | \"sensor\" | \"server\" | \"service\" | \"settings-2\" | \"settings-3\" | \"settings-4\" | \"settings-5\" | \"settings-6\" | \"settings\" | \"shape-2\" | \"shape\" | \"share-box\" | \"share-circle\" | \"share-forward-2\" | \"share-forward-box\" | \"share-forward\" | \"share\" | \"shield-check\" | \"shield-cross\" | \"shield-flash\" | \"shield-keyhole\" | \"shield\" | \"shield-star\" | \"shield-user\" | \"ship-2\" | \"ship\" | \"shirt\" | \"shopping-bag-2\" | \"shopping-bag-3\" | \"shopping-bag\" | \"shopping-basket-2\" | \"shopping-basket\" | \"shopping-cart-2\" | \"shopping-cart\" | \"showers\" | \"shuffle\" | \"shut-down\" | \"side-bar\" | \"signal-tower\" | \"signal-wifi-1\" | \"signal-wifi-2\" | \"signal-wifi-3\" | \"signal-wifi-error\" | \"signal-wifi\" | \"signal-wifi-off\" | \"sim-card-2\" | \"sim-card\" | \"sip\" | \"skip-back\" | \"skip-back-mini\" | \"skip-forward\" | \"skip-forward-mini\" | \"skull-2\" | \"skull\" | \"skype\" | \"slack\" | \"slice\" | \"slideshow-2\" | \"slideshow-3\" | \"slideshow-4\" | \"slideshow\" | \"smartphone\" | \"snapchat\" | \"snowy\" | \"sound-module\" | \"soundcloud\" | \"space-ship\" | \"spam-2\" | \"spam-3\" | \"spam\" | \"speaker-2\" | \"speaker-3\" | \"speaker\" | \"spectrum\" | \"speed\" | \"speed-mini\" | \"spotify\" | \"spy\" | \"stack\" | \"stack-overflow\" | \"stackshare\" | \"star-half\" | \"star-half-s\" | \"star\" | \"star-s\" | \"star-smile\" | \"steam\" | \"steering-2\" | \"steering\" | \"stethoscope\" | \"sticky-note-2\" | \"sticky-note\" | \"stop-circle\" | \"stop\" | \"stop-mini\" | \"store-2\" | \"store-3\" | \"store\" | \"subtract\" | \"subway\" | \"subway-wifi\" | \"suitcase-2\" | \"suitcase-3\" | \"suitcase\" | \"sun-cloudy\" | \"sun-foggy\" | \"sun\" | \"surgical-mask\" | \"surround-sound\" | \"survey\" | \"swap-box\" | \"swap\" | \"switch\" | \"sword\" | \"syringe\" | \"t-box\" | \"t-shirt-2\" | \"t-shirt-air\" | \"t-shirt\" | \"table-alt\" | \"table\" | \"tablet\" | \"takeaway\" | \"taobao\" | \"tape\" | \"task\" | \"taxi\" | \"taxi-wifi\" | \"team\" | \"telegram\" | \"temp-cold\" | \"temp-hot\" | \"terminal-box\" | \"terminal\" | \"terminal-window\" | \"test-tube\" | \"thermometer\" | \"thumb-down\" | \"thumb-up\" | \"thunderstorms\" | \"ticket-2\" | \"ticket\" | \"time\" | \"timer-2\" | \"timer-flash\" | \"timer\" | \"todo\" | \"toggle\" | \"tools\" | \"tornado\" | \"trademark\" | \"traffic-light\" | \"train\" | \"train-wifi\" | \"travesti\" | \"treasure-map\" | \"trello\" | \"trophy\" | \"truck\" | \"tumblr\" | \"tv-2\" | \"tv\" | \"twitch\" | \"twitter\" | \"typhoon\" | \"u-disk\" | \"ubuntu\" | \"umbrella\" | \"uninstall\" | \"unsplash\" | \"upload-2\" | \"upload-cloud-2\" | \"upload-cloud\" | \"upload\" | \"usb\" | \"user-2\" | \"user-3\" | \"user-4\" | \"user-5\" | \"user-6\" | \"user-add\" | \"user-follow\" | \"user-heart\" | \"user\" | \"user-location\" | \"user-received-2\" | \"user-received\" | \"user-search\" | \"user-settings\" | \"user-shared-2\" | \"user-shared\" | \"user-smile\" | \"user-star\" | \"user-unfollow\" | \"user-voice\" | \"video-add\" | \"video-chat\" | \"video-download\" | \"video\" | \"video-upload\" | \"vidicon-2\" | \"vidicon\" | \"vimeo\" | \"vip-crown-2\" | \"vip-crown\" | \"vip-diamond\" | \"vip\" | \"virus\" | \"visa\" | \"voice-recognition\" | \"voiceprint\" | \"volume-down\" | \"volume-mute\" | \"volume-off-vibrate\" | \"volume-up\" | \"volume-vibrate\" | \"vuejs\" | \"walk\" | \"wallet-2\" | \"wallet-3\" | \"wallet\" | \"water-flash\" | \"webcam\" | \"wechat-2\" | \"wechat\" | \"wechat-pay\" | \"weibo\" | \"whatsapp\" | \"wheelchair\" | \"wifi\" | \"wifi-off\" | \"window-2\" | \"window\" | \"windows\" | \"windy\" | \"wireless-charging\" | \"women\" | \"xbox\" | \"xing\" | \"youtube\" | \"zcool\" | \"zhihu\" | \"zoom-in\" | \"zoom-out\" | \"zzz\"",
        "references": {
          "IconNames": {
            "location": "import",
            "path": "./iconNames"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Name of the icon to be rendered.\nCorresponds to icon names from the [Remix Icon set](http://remixicon.com)"
      },
      "attribute": "icon",
      "reflect": false
    },
    "iconStyle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'fill' | 'line'",
        "resolved": "\"fill\" | \"line\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Style with which to render the icon"
      },
      "attribute": "icon-style",
      "reflect": false,
      "defaultValue": "getGlobalIconStyle()"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Colors | string",
        "resolved": "string | undefined",
        "references": {
          "Colors": {
            "location": "import",
            "path": "../../types"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The fill color of the icon"
      },
      "attribute": "color",
      "reflect": false
    },
    "iconUrl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The URL of the SVG file containing icon symbols"
      },
      "attribute": "icon-url",
      "reflect": false,
      "defaultValue": "getAssetPath(\n    `./assets/remixicon.symbol.svg`\n  )"
    }
  }; }
}
//# sourceMappingURL=icon.js.map