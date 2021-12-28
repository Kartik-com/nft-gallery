import Vue from 'vue'

import {
  faPaperPlane, faFileImage, faPlus,
  faSync, faTimes,
  faTrash, faCloudDownloadAlt, faKey,
  faExternalLinkAlt, faUpload, faUsers,
  faQuestionCircle, faMinus, faSearch,
  faInfoCircle, faChevronDown, faChevronUp, faChevronLeft, faChevronRight,
  faHeart, faCaretDown, faCaretUp, faInfo,
  faShareSquare, faCopy, faBookmark,
  faLink, faLanguage,
  faQuestion, faPrint,
  faMagic, faEye, faCommentAlt,
  faGhost, faCode, faLeaf,
  faFlask, faCameraRetro, faTag,
  faShareAlt, faShare, faExclamationTriangle,
  faCalendar, faCalculator, faEnvelope, faClock,
  faArrowsAlt, faCompressAlt, faCompressArrowsAlt,
  faAngleLeft, faAngleRight, faReply,
  faExternalLinkSquareAlt, faGift, faThLarge, faTh,
  faEyeSlash, faArrowUp, faUser, faGlobe, faExclamationCircle, faFilter, faQrcode,
  faFire, faMoneyBill, faHistory, faEllipsisH, faLightbulb
} from '@fortawesome/free-solid-svg-icons'

// throws error, idk why
import { faCommentDots, faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

import {
  faTwitter, faLine, faTelegram,
  faFacebook, faFacebookMessenger,
  faTelegramPlane, faMedium, faWhatsapp,
  faPinterest, faWpexplorer, faDiscord,
  faRedditAlien,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'

library.add(
  faPaperPlane, faFileImage, faPlus,
  faSync, faTimes,
  faCopy, faTrash, faCloudDownloadAlt,
  faKey, faExternalLinkAlt, faUpload,
  faUsers, faQuestionCircle, faMinus,
  faSearch, faInfoCircle, faChevronDown,
  faChevronUp, faChevronLeft, faChevronRight,
  faCaretDown, faCaretUp, faInfo, faShareSquare,
  faBookmark, faLink, faHeart,
  faLanguage, faQuestion, faEye,
  faPrint, faCommentAlt, faMagic,
  faLeaf, faFlask,
  faCalendar, faEnvelope, faClock,
  faCommentDots, faGhost, faCode,
  faWpexplorer,
  faRedditAlien, faCameraRetro,
  faTag, faShareAlt, faShare,
  faExclamationTriangle, faCalculator,
  faArrowsAlt, faCompressAlt, faCompressArrowsAlt,
  faEyeSlash, faArrowUp, faUser, faGlobe,
  faExclamationCircle, faFilter, faQrcode, faGift, faThLarge, faTh,
  faFire, faMoneyBill, faHistory, faEllipsisH, faLightbulb,

  // Social
  faTwitter, faTelegram, faFacebook,
  faFacebookMessenger, faDiscord,
  faLine, faTelegramPlane, faWhatsapp,
  faPinterest, faMedium,
  faAngleLeft, faAngleRight,
  faReply, faThumbsUp, faThumbsDown,
  faExternalLinkSquareAlt,
  faYoutube

)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('vue-fontawesome', FontAwesomeIcon)