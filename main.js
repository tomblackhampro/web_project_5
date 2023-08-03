!function(){"use strict";document.querySelector(".popup-image"),document.querySelector(".popup__image"),document.querySelector(".popup__title-img");const e=".card__delete-button",t=document.querySelector(".profile__rectangle-edit"),r=document.querySelector("#name"),i=document.querySelector("#aboutme"),s=document.querySelector(".profile__rectangle-add"),o={};document.querySelectorAll(".popup__close");var n=class{constructor(t,r,i){this._title=t.title,this._imgUrl=t.imgUrl,this._handleCardClick=i,this._cardSelector=r,this._deleteButton=e}_getTemplate(){return document.querySelector(this._cardSelector).content.cloneNode(!0)}_setEventListeners(){this._cardImage.addEventListener("click",(e=>{this._handleCardClick({imgSrc:e.target.getAttribute("src"),imgAlt:e.target.getAttribute("alt")})})),this._element.querySelector(e).addEventListener("click",this._deleteCard.bind(this)),this._element.querySelector(".card__like-button").addEventListener("click",this._toggleLike.bind(this))}_deleteCard(e){e.target.closest(".card").remove()}_toggleLike(e){e.target.classList.toggle("card__like-button_active")}generateCard(){return this._element=this._getTemplate(),this._cardTitle=this._element.querySelector(".card__title"),this._cardImage=this._element.querySelector(".card__image"),this._cardTitle.textContent=this._title,this._cardImage.setAttribute("src",`${this._imgUrl}`),this._cardImage.setAttribute("alt",`image of ${this._title}`),this._setEventListeners(),this._element}};class l{constructor(e){var t,r,i;t=this,i=e=>{"Escape"==e.key&&this.close()},(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(r="_handleEscClose"))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,this._selector=e,this._popup=document.querySelector(this._selector),this._popupCloseButton=this._popup.querySelector(".popup__close")}_handleRemoteClickClose(e){const t=this._popup.querySelector(".popup__background");e.target===t&&this.close()}open(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}setEventListeners(){this._popupCloseButton.addEventListener("click",(()=>{this.close()})),this._popup.addEventListener("mousedown",(e=>{this._handleRemoteClickClose(e)}))}}class a extends l{constructor(e,t){super(e),this._submitCallback=t,this._form=this._popup.querySelector(".popup__form"),this._inputList=this._form.querySelectorAll(".popup__input")}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._submitCallback(this._getInputValues()),this.close()}))}close(){super.close(),this._form.reset()}}const c=new class{constructor(e,t){let{items:r,renderer:i}=e;this._items=r,this._renderer=i,this._containerWrapper=document.querySelector(t)}renderItems(){this._items.forEach((e=>{const t=this._renderer(e);this.addItem(t)}))}addItem(e){this._containerWrapper.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:e=>h(e.link,e.name)},".places__list");c.renderItems();const u=new a(".popup-profile",(e=>{m.setUserInfo({name:e.name,jobTitle:e.aboutme})}));u.setEventListeners();const p=new a(".popup-add",(e=>{const t=h(e.imagelink,e.title);c.addItem(t)}));p.setEventListeners();const _=new class extends l{constructor(e){super(e),this._popupImg=this._popup.querySelector(".popup__image"),this._popupImgDescription=this._popup.querySelector(".popup__title-img")}_setImageProperties(){this._popupImg.setAttribute("src",this._imgSrc),this._popupImg.setAttribute("alt",`image of ${this._imgAlt}`),this._popupImgDescription.textContent=this._imgAlt}open(e){let{name:t,link:r}=e;this._imgSrc=t,this._imgAlt=r,this._setImageProperties(),super.open()}}(".popup-image");var d;_.setEventListeners(),d={errorSelector:".popup__error",formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inputErrorClass:"popup__input_type_error",inactiveButtonClass:"popup__button_disabled",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(d.formSelector)).forEach((e=>{const t=new class{constructor(e,t){var r,i,s;r=this,s=()=>this._inputList.every((e=>e.validity.valid)),(i=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(i="_checkFormValidity"))in r?Object.defineProperty(r,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[i]=s,this._formElement=t,this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._submitButtonSelector=e.submitButtonSelector,this._inputSelector=e.inputSelector,this._formSelector=e.formSelector,this._button=this._formElement.querySelector(this._submitButtonSelector)}_setEventListeners(){this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}_checkInputValidity(e){e.validity.valid?this._hideError(e):this._showError(e)}_showError(e){const t=this._formElement.querySelector(`.${e.id}-error`);console.log(t,"show"),t&&(t.textContent=e.validationMessage,t.classList.add(this._errorClass),e.classList.add(this._inputErrorClass))}_hideError(e){const t=this._formElement.querySelector(`.${e.id}-error`);console.log(t,"hide"),t&&(t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass))}_toggleButtonState(){this._checkFormValidity()?(this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1):(this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0)}resetValidation(){this._toggleButtonState(),this._inputList.forEach((e=>{this._hideError(e)}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners(),this._toggleButtonState()}}(d,e),r=e.getAttribute("name");o[r]=t,t.enableValidation()}));const m=new class{constructor(e){let{nameSelector:t,descriptionSelector:r}=e;this._nameElement=document.querySelector(t),this._descriptionElement=document.querySelector(r)}getUserInfo(){return{nameSelector:this._nameElement.textContent,descriptionSelector:this._descriptionElement.textContent}}setUserInfo(e){let{name:t,jobTitle:r}=e;this._nameElement.textContent=t,this._descriptionElement.textContent=r}}({nameSelector:".profile__title",descriptionSelector:".profile__description"});function h(e,t){return new n({imgUrl:e,title:t},"#card-template",(e=>{let{imgSrc:t,imgAlt:r}=e;_.open({name:t,link:r})})).generateCard()}m.setUserInfo({name:"Jacques Cousteau",jobTitle:"Explorer"}),t.addEventListener("click",(()=>{const e=m.getUserInfo();r.value=e.nameSelector,i.value=e.descriptionSelector,u.open()})),s.addEventListener("click",(()=>{o[formadd.getAttribute("name")].resetValidation(),p.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBNEIwQkEsU0FBU0MsY0FBYyxnQkFDNUJELFNBQVNDLGNBQWMsaUJBQ2xCRCxTQUFTQyxjQUFjLHFCQTlCMUMsTUFtQ01DLEVBQTJCLHVCQUMzQkMsRUFBb0JILFNBQVNDLGNBQ3hDLDRCQUVXRyxFQUFZSixTQUFTQyxjQUFjLFNBQ25DSSxFQUFrQkwsU0FBU0MsY0FBYyxZQUN6Q0ssRUFBbUJOLFNBQVNDLGNBQ3ZDLDJCQUVXTSxFQUFpQixDQUFDLEVBRUhQLFNBQVNRLGlCQUFpQixpQkNVdEQsTUFuREEsTUFDRUMsWUFBWUMsRUFBTUMsRUFBY0MsR0FDOUJDLEtBQUtDLE9BQVNKLEVBQUtLLE1BQ25CRixLQUFLRyxRQUFVTixFQUFLTyxPQUNwQkosS0FBS0ssaUJBQW1CTixFQUN4QkMsS0FBS00sY0FBZ0JSLEVBQ3JCRSxLQUFLTyxjQUFnQmxCLENBQ3ZCLENBRUFtQixlQUlFLE9BSG9CckIsU0FDakJDLGNBQWNZLEtBQUtNLGVBQ25CRyxRQUFRQyxXQUFVLEVBRXZCLENBRUFDLHFCQUNFWCxLQUFLWSxXQUFXQyxpQkFBaUIsU0FBVUMsSUFDekNkLEtBQUtLLGlCQUFpQixDQUNwQlUsT0FBUUQsRUFBSUUsT0FBT0MsYUFBYSxPQUNoQ0MsT0FBUUosRUFBSUUsT0FBT0MsYUFBYSxRQUNoQyxJQUVKakIsS0FBS21CLFNBQ0YvQixjQUFjQyxHQUNkd0IsaUJBQWlCLFFBQVNiLEtBQUtvQixZQUFZQyxLQUFLckIsT0FDbkRBLEtBQUttQixTQUNGL0IsY0RFK0Isc0JDRC9CeUIsaUJBQWlCLFFBQVNiLEtBQUtzQixZQUFZRCxLQUFLckIsTUFDckQsQ0FFQW9CLFlBQVlOLEdBQ1ZBLEVBQUlFLE9BQU9PLFFBQVEsU0FBU0MsUUFDOUIsQ0FFQUYsWUFBWVIsR0FDVkEsRUFBSUUsT0FBT1MsVUFBVUMsT0FBTywyQkFDOUIsQ0FFQUMsZUFRRSxPQVBBM0IsS0FBS21CLFNBQVduQixLQUFLUSxlQUNyQlIsS0FBSzRCLFdBQWE1QixLQUFLbUIsU0FBUy9CLGNBQWMsZ0JBQzlDWSxLQUFLWSxXQUFhWixLQUFLbUIsU0FBUy9CLGNBQWMsZ0JBQzlDWSxLQUFLNEIsV0FBV0MsWUFBYzdCLEtBQUtDLE9BQ25DRCxLQUFLWSxXQUFXa0IsYUFBYSxNQUFRLEdBQUU5QixLQUFLRyxXQUM1Q0gsS0FBS1ksV0FBV2tCLGFBQWEsTUFBUSxZQUFXOUIsS0FBS0MsVUFDckRELEtBQUtXLHFCQUNFWCxLQUFLbUIsUUFDZCxHQ3JEYSxNQUFNWSxFQUNuQm5DLFlBQVlvQyxHLFlBQWUsSyxFQU1SbEIsSUFDRixVQUFYQSxFQUFJbUIsS0FDTmpDLEtBQUtrQyxPQUNQLEcsK1NBVHlCLHNCLHdGQUN6QmxDLEtBQUttQyxVQUFZSCxFQUNqQmhDLEtBQUtvQyxPQUFTakQsU0FBU0MsY0FBY1ksS0FBS21DLFdBQzFDbkMsS0FBS3FDLGtCQUFvQnJDLEtBQUtvQyxPQUFPaEQsY0FBYyxnQkFDckQsQ0FRQWtELHdCQUF3QnhCLEdBQ3RCLE1BQU15QixFQUFhdkMsS0FBS29DLE9BQU9oRCxjQUFjLHNCQUN6QzBCLEVBQUlFLFNBQVd1QixHQUNqQnZDLEtBQUtrQyxPQUVULENBRUFNLE9BQ0V4QyxLQUFLb0MsT0FBT1gsVUFBVWdCLElBQUksZ0JBQzFCdEQsU0FBUzBCLGlCQUFpQixVQUFXYixLQUFLMEMsZ0JBQzVDLENBRUFSLFFBQ0VsQyxLQUFLb0MsT0FBT1gsVUFBVUQsT0FBTyxnQkFDN0JyQyxTQUFTd0Qsb0JBQW9CLFVBQVczQyxLQUFLMEMsZ0JBQy9DLENBRUFFLG9CQUNFNUMsS0FBS3FDLGtCQUFrQnhCLGlCQUFpQixTQUFTLEtBQy9DYixLQUFLa0MsT0FBTyxJQUVkbEMsS0FBS29DLE9BQU92QixpQkFBaUIsYUFBY0MsSUFDekNkLEtBQUtzQyx3QkFBd0J4QixFQUFJLEdBRXJDLEVDbkNhLE1BQU0rQixVQUFzQmQsRUFDekNuQyxZQUFZb0MsRUFBZWMsR0FDekJDLE1BQU1mLEdBQ05oQyxLQUFLZ0QsZ0JBQWtCRixFQUN2QjlDLEtBQUtpRCxNQUFRakQsS0FBS29DLE9BQU9oRCxjQUFjLGdCQUN2Q1ksS0FBS2tELFdBQWFsRCxLQUFLaUQsTUFBTXRELGlCQUFpQixnQkFDaEQsQ0FFQXdELGtCQUNFLE1BQU1DLEVBQWEsQ0FBQyxFQUtwQixPQUpBcEQsS0FBS2tELFdBQVdHLFNBQVNDLElBQ3ZCRixFQUFXRSxFQUFNQyxNQUFRRCxFQUFNRSxLQUFLLElBRy9CSixDQUNULENBRUFSLG9CQUNFRyxNQUFNSCxvQkFDTjVDLEtBQUtpRCxNQUFNcEMsaUJBQWlCLFVBQVdDLElBQ3JDQSxFQUFJMkMsaUJBQ0p6RCxLQUFLZ0QsZ0JBQWdCaEQsS0FBS21ELG1CQUMxQm5ELEtBQUtrQyxPQUFPLEdBRWhCLENBRUFBLFFBQ0VhLE1BQU1iLFFBQ05sQyxLQUFLaUQsTUFBTVMsT0FDYixFQ2RGLE1BQU1DLEVBQVcsSUNqQkYsTUFDYi9ELFlBQVdnRSxFQUFzQkMsR0FBbUIsSUFBeEMsTUFBRUMsRUFBSyxTQUFFQyxHQUFVSCxFQUM3QjVELEtBQUtnRSxPQUFTRixFQUNkOUQsS0FBS2lFLFVBQVlGLEVBQ2pCL0QsS0FBS2tFLGtCQUFvQi9FLFNBQVNDLGNBQWN5RSxFQUNsRCxDQUVBTSxjQUNFbkUsS0FBS2dFLE9BQU9YLFNBQVNlLElBQ25CLE1BQU1DLEVBQVVyRSxLQUFLaUUsVUFBVUcsR0FDL0JwRSxLQUFLc0UsUUFBUUQsRUFBUSxHQUV6QixDQUVBQyxRQUFRQyxHQUNOdkUsS0FBS2tFLGtCQUFrQk0sUUFBUUQsRUFDakMsR0RFQSxDQUNFVCxNSm5Cd0IsQ0FDMUIsQ0FDRVAsS0FBTSxrQkFDTmtCLEtBQU0sb0RBRVIsQ0FDRWxCLEtBQU0sY0FDTmtCLEtBQU0sdURBRVIsQ0FDRWxCLEtBQU0saUJBQ05rQixLQUFNLDBEQUVSLENBQ0VsQixLQUFNLFVBQ05rQixLQUFNLG1EQUVSLENBQ0VsQixLQUFNLHdCQUNOa0IsS0FBTSxtREFFUixDQUNFbEIsS0FBTSxpQkFDTmtCLEtBQU0saURJSE5WLFNBQVdLLEdBQ1dNLEVBQVdOLEVBQUtLLEtBQU1MLEVBQUtiLE9KMEJwQixpQkluQmpDSSxFQUFTUSxjQUVULE1BQU1RLEVBQW1CLElBQUk5QixFQUFjLGtCQUFtQitCLElBQzVEQyxFQUFzQkMsWUFBWSxDQUNoQ3ZCLEtBQU1xQixFQUFTckIsS0FDZndCLFNBQVVILEVBQVNJLFNBQ25CLElBRUpMLEVBQWlCL0Isb0JBRWpCLE1BQU1xQyxFQUFjLElBQUlwQyxFQUFjLGNBQWUrQixJQUNuRCxNQUFNTSxFQUFjUixFQUFXRSxFQUFTTyxVQUFXUCxFQUFTMUUsT0FDNUR5RCxFQUFTVyxRQUFRWSxFQUFZLElBRS9CRCxFQUFZckMsb0JBRVosTUFBTXdDLEVBQWlCLElFM0NSLGNBQTZCckQsRUFDMUNuQyxZQUFZb0MsR0FDVmUsTUFBTWYsR0FDTmhDLEtBQUtxRixVQUFZckYsS0FBS29DLE9BQU9oRCxjQUFjLGlCQUMzQ1ksS0FBS3NGLHFCQUF1QnRGLEtBQUtvQyxPQUFPaEQsY0FBYyxvQkFDeEQsQ0FFQW1HLHNCQUNFdkYsS0FBS3FGLFVBQVV2RCxhQUFhLE1BQU85QixLQUFLd0YsU0FDeEN4RixLQUFLcUYsVUFBVXZELGFBQWEsTUFBUSxZQUFXOUIsS0FBS3lGLFdBQ3BEekYsS0FBS3NGLHFCQUFxQnpELFlBQWM3QixLQUFLeUYsT0FDL0MsQ0FDQWpELEtBQUlvQixHQUFpQixJQUFoQixLQUFFTCxFQUFJLEtBQUVrQixHQUFNYixFQUNqQjVELEtBQUt3RixRQUFVakMsRUFDZnZELEtBQUt5RixRQUFVaEIsRUFDZnpFLEtBQUt1RixzQkFDTHhDLE1BQU1QLE1BQ1IsR0YwQndDLGdCQUdoQmtELE1BRjFCTixFQUFleEMsb0JBRVc4QyxFQVVULENBQ2ZDLGNBQWUsZ0JBQ2ZDLGFBQWMsZUFDZEMsY0FBZSxnQkFDZkMscUJBQXNCLHNCQUN0QkMsZ0JBQWlCLDBCQUNqQkMsb0JBQXFCLHlCQUNyQkMsV0FBWSx3QkFoQktDLE1BQU1DLEtBQUtoSCxTQUFTUSxpQkFBaUIrRixFQUFTRSxlQUN0RHZDLFNBQVMrQyxJQUNoQixNQUFNQyxFQUFZLElHbER0QixNQUNFekcsWUFBWThGLEVBQVVZLEcsWUFBYSxLLEVBcURkLElBQ25CdEcsS0FBS2tELFdBQVdxRCxPQUFPakQsR0FBVUEsRUFBTWtELFNBQVNDLFMsK1NBdERmLHlCLHdGQUNqQ3pHLEtBQUswRyxhQUFlSixFQUNwQnRHLEtBQUtrRCxXQUFhZ0QsTUFBTUMsS0FDdEJuRyxLQUFLMEcsYUFBYS9HLGlCQUFpQitGLEVBQVNHLGdCQUU5QzdGLEtBQUsyRyxxQkFBdUJqQixFQUFTTSxvQkFDckNoRyxLQUFLNEcsaUJBQW1CbEIsRUFBU0ssZ0JBQ2pDL0YsS0FBSzZHLFlBQWNuQixFQUFTTyxXQUM1QmpHLEtBQUs4RyxzQkFBd0JwQixFQUFTSSxxQkFDdEM5RixLQUFLK0csZUFBaUJyQixFQUFTRyxjQUMvQjdGLEtBQUtnSCxjQUFnQnRCLEVBQVNFLGFBQzlCNUYsS0FBS2lILFFBQVVqSCxLQUFLMEcsYUFBYXRILGNBQWNZLEtBQUs4RyxzQkFDdEQsQ0FFQW5HLHFCQUNFWCxLQUFLa0QsV0FBV0csU0FBUzZELElBQ3ZCQSxFQUFVckcsaUJBQWlCLFNBQVMsS0FDbENiLEtBQUttSCxvQkFBb0JELEdBQ3pCbEgsS0FBS29ILG9CQUFvQixHQUN6QixHQUVOLENBRUFELG9CQUFvQkQsR0FDYkEsRUFBVVYsU0FBU0MsTUFHdEJ6RyxLQUFLcUgsV0FBV0gsR0FGaEJsSCxLQUFLc0gsV0FBV0osRUFJcEIsQ0FFQUksV0FBV0osR0FDVCxNQUFNSyxFQUFldkgsS0FBSzBHLGFBQWF0SCxjQUFlLElBQUc4SCxFQUFVTSxZQUNuRUMsUUFBUUMsSUFBSUgsRUFBYSxRQUNyQkEsSUFFRkEsRUFBYTFGLFlBQWNxRixFQUFVUyxrQkFDckNKLEVBQWE5RixVQUFVZ0IsSUFBSXpDLEtBQUs2RyxhQUNoQ0ssRUFBVXpGLFVBQVVnQixJQUFJekMsS0FBSzRHLGtCQUVqQyxDQUVBUyxXQUFXSCxHQUNULE1BQU1LLEVBQWV2SCxLQUFLMEcsYUFBYXRILGNBQWUsSUFBRzhILEVBQVVNLFlBQ25FQyxRQUFRQyxJQUFJSCxFQUFhLFFBQ3JCQSxJQUVGQSxFQUFhMUYsWUFBYyxHQUMzQjBGLEVBQWE5RixVQUFVRCxPQUFPeEIsS0FBSzZHLGFBQ25DSyxFQUFVekYsVUFBVUQsT0FBT3hCLEtBQUs0RyxrQkFFcEMsQ0FLQVEscUJBQ3NCcEgsS0FBSzRILHNCQUV2QjVILEtBQUtpSCxRQUFReEYsVUFBVUQsT0FBT3hCLEtBQUsyRyxzQkFDbkMzRyxLQUFLaUgsUUFBUVksVUFBVyxJQUV4QjdILEtBQUtpSCxRQUFReEYsVUFBVWdCLElBQUl6QyxLQUFLMkcsc0JBQ2hDM0csS0FBS2lILFFBQVFZLFVBQVcsRUFFNUIsQ0FFQUMsa0JBQ0U5SCxLQUFLb0gscUJBQ0xwSCxLQUFLa0QsV0FBV0csU0FBUzBFLElBQ3ZCL0gsS0FBS3FILFdBQVdVLEVBQWEsR0FFakMsQ0FFQUMsbUJBQ0VoSSxLQUFLMEcsYUFBYTdGLGlCQUFpQixVQUFXQyxJQUM1Q0EsRUFBSTJDLGdCQUFnQixJQUV0QnpELEtBQUtXLHFCQUNMWCxLQUFLb0gsb0JBQ1AsR0gvQnNDMUIsRUFBVVUsR0FDeEM2QixFQUFXN0IsRUFBVW5GLGFBQWEsUUFDeEN2QixFQUFldUksR0FBWTVCLEVBQzNCQSxFQUFVMkIsa0JBQWtCLElBY2hDLE1BQU1uRCxFQUF3QixJSW5FZixNQUNiakYsWUFBV2dFLEdBQXdDLElBQXZDLGFBQUVzRSxFQUFZLG9CQUFFQyxHQUFxQnZFLEVBQy9DNUQsS0FBS29JLGFBQWVqSixTQUFTQyxjQUFjOEksR0FDM0NsSSxLQUFLcUksb0JBQXNCbEosU0FBU0MsY0FBYytJLEVBQ3BELENBRUFHLGNBQ0UsTUFBTyxDQUNMSixhQUFjbEksS0FBS29JLGFBQWF2RyxZQUNoQ3NHLG9CQUFxQm5JLEtBQUtxSSxvQkFBb0J4RyxZQUVsRCxDQUVBaUQsWUFBV3lELEdBQXFCLElBQXBCLEtBQUVoRixFQUFJLFNBQUV3QixHQUFVd0QsRUFDNUJ2SSxLQUFLb0ksYUFBYXZHLFlBQWMwQixFQUNoQ3ZELEtBQUtxSSxvQkFBb0J4RyxZQUFja0QsQ0FDekMsR0ptRHlDLENBQ3pDbUQsYUFBYyxrQkFDZEMsb0JBQXFCLDBCQVF2QixTQUFTekQsRUFBV0QsRUFBTWxCLEdBWXhCLE9BWG1CLElBQUlpRixFQUNyQixDQUFFcEksT0FBUXFFLEVBQU12RSxNQUFPcUQsR0FDdkIsa0JBQ0FLLElBQXdCLElBQXZCLE9BQUU3QyxFQUFNLE9BQUVHLEdBQVEwQyxFQUNqQndCLEVBQWU1QyxLQUFLLENBQ2xCZSxLQUFNeEMsRUFDTjBELEtBQU12RCxHQUNOLElBR3FCUyxjQUU3QixDQWxCQWtELEVBQXNCQyxZQUFZLENBQ2hDdkIsS0FBTSxtQkFDTndCLFNBQVUsYUFrQlp6RixFQUFrQnVCLGlCQUFpQixTQUFTLEtBQzFDLE1BQU00SCxFQUFXNUQsRUFBc0J5RCxjQUN2Qy9JLEVBQVVpRSxNQUFRaUYsRUFBU1AsYUFDM0IxSSxFQUFnQmdFLE1BQVFpRixFQUFTTixvQkFDakN4RCxFQUFpQm5DLE1BQU0sSUFHekIvQyxFQUFpQm9CLGlCQUFpQixTQUFTLEtBQ3pDbkIsRUFBZWdKLFFBQVF6SCxhQUFhLFNBQVM2RyxrQkFDN0M3QyxFQUFZekMsTUFBTSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNhcmRJbWFnZSA9IFwiLmNhcmRfX2ltYWdlXCI7XG5leHBvcnQgY29uc3QgaW1hZ2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtaW1hZ2VcIik7XG5leHBvcnQgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbmV4cG9ydCBjb25zdCBpbWFnZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fdGl0bGUtaW1nXCIpO1xuZXhwb3J0IGNvbnN0IGNhcmRJbWFnZUNsYXNzU2VsZWN0b3IgPSBcIi5jYXJkX19pbWFnZVwiO1xuZXhwb3J0IGNvbnN0IGNhcmRUaXRsZUNsYXNzU2VsZWN0b3IgPSBcIi5jYXJkX190aXRsZVwiO1xuZXhwb3J0IGNvbnN0IGNhcmRDbGFzc1NlbGVjdG9yID0gXCIuY2FyZFwiO1xuZXhwb3J0IGNvbnN0IGNhcmRMaWtlQnV0dG9uU2VsZWN0b3IgPSBcIi5jYXJkX19saWtlLWJ1dHRvblwiO1xuZXhwb3J0IGNvbnN0IGNhcmREZWxldGVCdXR0b25TZWxlY3RvciA9IFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIjtcbmV4cG9ydCBjb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLnByb2ZpbGVfX3JlY3RhbmdsZS1lZGl0XCJcbik7XG5leHBvcnQgY29uc3QgbmFtZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xuZXhwb3J0IGNvbnN0IG5hbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRtZVwiKTtcbmV4cG9ydCBjb25zdCBjYXJkQ3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIucHJvZmlsZV9fcmVjdGFuZ2xlLWFkZFwiXG4pO1xuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0b3JzID0ge307XG5cbmV4cG9ydCBjb25zdCBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19jbG9zZVwiKTtcbmV4cG9ydCBjb25zdCBjb250YWluZXJTZWxlY3RvciA9IFwiLnBsYWNlc19fbGlzdFwiO1xuXG5leHBvcnQgY29uc3QgdXNlcklkID0gXCI5NzBlYjEyMi00NTZkLTRkY2ItOWI1YS1lODYzMjI0YzgxZjFcIjtcbiIsImltcG9ydCB7XG4gIGNhcmRMaWtlQnV0dG9uU2VsZWN0b3IsXG4gIGNhcmREZWxldGVCdXR0b25TZWxlY3Rvcixcbn0gZnJvbSBcIi4uL3NjcmlwdHMvY29uc3RhbnRzLmpzXCI7XG5cbmNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xuICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl9pbWdVcmwgPSBkYXRhLmltZ1VybDtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IGNhcmREZWxldGVCdXR0b25TZWxlY3RvcjtcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHtcbiAgICAgICAgaW1nU3JjOiBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInNyY1wiKSxcbiAgICAgICAgaW1nQWx0OiBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImFsdFwiKSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGNhcmREZWxldGVCdXR0b25TZWxlY3RvcilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fZGVsZXRlQ2FyZC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihjYXJkTGlrZUJ1dHRvblNlbGVjdG9yKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl90b2dnbGVMaWtlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgX2RlbGV0ZUNhcmQoZXZ0KSB7XG4gICAgZXZ0LnRhcmdldC5jbG9zZXN0KFwiLmNhcmRcIikucmVtb3ZlKCk7XG4gIH1cblxuICBfdG9nZ2xlTGlrZShldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fY2FyZFRpdGxlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpOyAvLyBEZWZpbmUgY2FyZFRpdGxlIHZhcmlhYmxlIGhlcmVcbiAgICB0aGlzLl9jYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7IC8vIFNldCBjYXJkIHRpdGxlIHRleHQgY29udGVudFxuICAgIHRoaXMuX2NhcmRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7dGhpcy5faW1nVXJsfWApO1xuICAgIHRoaXMuX2NhcmRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYGltYWdlIG9mICR7dGhpcy5fdGl0bGV9YCk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fc2VsZWN0b3IgPSBwb3B1cFNlbGVjdG9yO1xuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zZWxlY3Rvcik7XG4gICAgdGhpcy5fcG9wdXBDbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpO1xuICB9XG5cbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xuICAgIGlmIChldnQua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgX2hhbmRsZVJlbW90ZUNsaWNrQ2xvc2UoZXZ0KSB7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2JhY2tncm91bmRcIik7XG4gICAgaWYgKGV2dC50YXJnZXQgPT09IGJhY2tncm91bmQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVSZW1vdGVDbGlja0Nsb3NlKGV2dCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBzdWJtaXRDYWxsYmFjaykge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3N1Ym1pdENhbGxiYWNrID0gc3VibWl0Q2FsbGJhY2s7XG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBmb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9ybVZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5fc3VibWl0Q2FsbGJhY2sodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCB7XG4gIGluaXRpYWxDYXJkcyxcbiAgcHJvZmlsZUVkaXRCdXR0b24sXG4gIGNhcmRDcmVhdGVCdXR0b24sXG4gIG5hbWVUaXRsZSxcbiAgbmFtZURlc2NyaXB0aW9uLFxuICBmb3JtVmFsaWRhdG9ycyxcbiAgY29udGFpbmVyU2VsZWN0b3IsXG59IGZyb20gXCIuLi9zY3JpcHRzL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcblxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXG4gICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoaXRlbS5saW5rLCBpdGVtLm5hbWUpO1xuICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lclNlbGVjdG9yXG4pO1xuXG5jYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xuXG5jb25zdCBwcm9maWxlRm9ybVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXAtcHJvZmlsZVwiLCAoZm9ybURhdGEpID0+IHtcbiAgcmVuZGVyVXNlclByb2ZpbGVJbmZvLnNldFVzZXJJbmZvKHtcbiAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgIGpvYlRpdGxlOiBmb3JtRGF0YS5hYm91dG1lLFxuICB9KTtcbn0pO1xucHJvZmlsZUZvcm1Qb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCBhZGRDYXJkRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwLWFkZFwiLCAoZm9ybURhdGEpID0+IHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGZvcm1EYXRhLmltYWdlbGluaywgZm9ybURhdGEudGl0bGUpO1xuICBjYXJkTGlzdC5hZGRJdGVtKGNhcmRFbGVtZW50KTtcbn0pO1xuYWRkQ2FyZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIucG9wdXAtaW1hZ2VcIik7XG5wb3B1cFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKHNldHRpbmdzKSA9PiB7XG4gIGNvbnN0IGZvcm1MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmZvcm1TZWxlY3RvcikpO1xuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtSW5wdXQpID0+IHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgZm9ybUlucHV0KTtcbiAgICBjb25zdCBmb3JtTmFtZSA9IGZvcm1JbnB1dC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xuICAgIGZvcm1WYWxpZGF0b3JzW2Zvcm1OYW1lXSA9IHZhbGlkYXRvcjtcbiAgICB2YWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuICB9KTtcbn07XG5cbmVuYWJsZVZhbGlkYXRpb24oe1xuICBlcnJvclNlbGVjdG9yOiBcIi5wb3B1cF9fZXJyb3JcIixcbiAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLnBvcHVwX19idXR0b24tc2F2ZVwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGVycm9yQ2xhc3M6IFwicG9wdXBfX2Vycm9yX3Zpc2libGVcIixcbn0pO1xuXG5jb25zdCByZW5kZXJVc2VyUHJvZmlsZUluZm8gPSBuZXcgVXNlckluZm8oe1xuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX3RpdGxlXCIsXG4gIGRlc2NyaXB0aW9uU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIsXG59KTtcblxucmVuZGVyVXNlclByb2ZpbGVJbmZvLnNldFVzZXJJbmZvKHtcbiAgbmFtZTogXCJKYWNxdWVzIENvdXN0ZWF1XCIsXG4gIGpvYlRpdGxlOiBcIkV4cGxvcmVyXCIsXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChsaW5rLCBuYW1lKSB7XG4gIGNvbnN0IGNhcmRPYmplY3QgPSBuZXcgQ2FyZChcbiAgICB7IGltZ1VybDogbGluaywgdGl0bGU6IG5hbWUgfSxcbiAgICBcIiNjYXJkLXRlbXBsYXRlXCIsXG4gICAgKHsgaW1nU3JjLCBpbWdBbHQgfSkgPT4ge1xuICAgICAgcG9wdXBXaXRoSW1hZ2Uub3Blbih7XG4gICAgICAgIG5hbWU6IGltZ1NyYyxcbiAgICAgICAgbGluazogaW1nQWx0LFxuICAgICAgfSk7XG4gICAgfVxuICApO1xuICBjb25zdCBuZXdDYXJkID0gY2FyZE9iamVjdC5nZW5lcmF0ZUNhcmQoKTtcbiAgcmV0dXJuIG5ld0NhcmQ7XG59XG5cbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHVzZXJJbmZvID0gcmVuZGVyVXNlclByb2ZpbGVJbmZvLmdldFVzZXJJbmZvKCk7XG4gIG5hbWVUaXRsZS52YWx1ZSA9IHVzZXJJbmZvLm5hbWVTZWxlY3RvcjtcbiAgbmFtZURlc2NyaXB0aW9uLnZhbHVlID0gdXNlckluZm8uZGVzY3JpcHRpb25TZWxlY3RvcjtcbiAgcHJvZmlsZUZvcm1Qb3B1cC5vcGVuKCk7XG59KTtcblxuY2FyZENyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBmb3JtVmFsaWRhdG9yc1tmb3JtYWRkLmdldEF0dHJpYnV0ZShcIm5hbWVcIildLnJlc2V0VmFsaWRhdGlvbigpO1xuICBhZGRDYXJkRm9ybS5vcGVuKCk7XG59KTtcblxuLy8vQXBpXG4vKiBhcGkuZ2V0VXNlckluZm8oKS50aGVuKChyZXMpID0+IHtcbiAgLy9jb25zb2xlLmxvZyhyZXMpXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHsgbmFtZTogcmVzLm5hbWUsIGFib3V0TWU6IHJlcy5hYm91dCwgdXNlcklkOiByZXMuX2lkIH0pO1xuICAvL2NvbnNvbGUubG9nKFwiY2hlY2tcIiwgYXBpKVxufSk7XG5hcGkuZ2V0SW5pdGlhbENhcmRzKCkudGhlbigocmVzKSA9PiB7XG4gIHNlY3Rpb24ucmVuZGVySXRlbXMocmVzKTtcbiAgLy9jb25zb2xlLmxvZyhcInJlc1wiLCByZXMpXG59KTtcbiovXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgICAgdGhpcy5hZGRJdGVtKG5ld0l0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyV3JhcHBlci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fcG9wdXBJbWcgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbiAgICB0aGlzLl9wb3B1cEltZ0Rlc2NyaXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fdGl0bGUtaW1nXCIpO1xuICB9XG5cbiAgX3NldEltYWdlUHJvcGVydGllcygpIHtcbiAgICB0aGlzLl9wb3B1cEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5faW1nU3JjKTtcbiAgICB0aGlzLl9wb3B1cEltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYGltYWdlIG9mICR7dGhpcy5faW1nQWx0fWApO1xuICAgIHRoaXMuX3BvcHVwSW1nRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLl9pbWdBbHQ7XG4gIH1cbiAgb3Blbih7IG5hbWUsIGxpbmsgfSkge1xuICAgIHRoaXMuX2ltZ1NyYyA9IG5hbWU7XG4gICAgdGhpcy5faW1nQWx0ID0gbGluaztcbiAgICB0aGlzLl9zZXRJbWFnZVByb3BlcnRpZXMoKTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmlucHV0U2VsZWN0b3IpXG4gICAgKTtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBzZXR0aW5ncy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0SXRlbSkgPT4ge1xuICAgICAgaW5wdXRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEl0ZW0pO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0SXRlbSkge1xuICAgIGlmICghaW5wdXRJdGVtLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoaW5wdXRJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUVycm9yKGlucHV0SXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3dFcnJvcihpbnB1dEl0ZW0pIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEl0ZW0uaWR9LWVycm9yYCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JFbGVtZW50LFwic2hvd1wiKTtcbiAgICBpZiAoZXJyb3JFbGVtZW50KSB7XG4gICAgICAvL2NvbnNvbGUubG9nKGVycm9yRWxlbWVudCxcInNob3dcIik7XG4gICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEl0ZW0udmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICAgIGlucHV0SXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgX2hpZGVFcnJvcihpbnB1dEl0ZW0pIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEl0ZW0uaWR9LWVycm9yYCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JFbGVtZW50LFwiaGlkZVwiKTtcbiAgICBpZiAoZXJyb3JFbGVtZW50KSB7XG4gICAgICAvL2NvbnNvbGUubG9nKGVycm9yRWxlbWVudCxcImhpZGVcIik7XG4gICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgICBpbnB1dEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIF9jaGVja0Zvcm1WYWxpZGl0eSA9ICgpID0+XG4gICAgdGhpcy5faW5wdXRMaXN0LmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQudmFsaWRpdHkudmFsaWQpO1xuXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IHRoaXMuX2NoZWNrRm9ybVZhbGlkaXR5KCk7XG4gICAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gICAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX2J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBkZXNjcmlwdGlvblNlbGVjdG9yIH0pIHtcbiAgICB0aGlzLl9uYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlc2NyaXB0aW9uU2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWVTZWxlY3RvcjogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgICBkZXNjcmlwdGlvblNlbGVjdG9yOiB0aGlzLl9kZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgfTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgam9iVGl0bGUgfSkge1xuICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBqb2JUaXRsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhcmREZWxldGVCdXR0b25TZWxlY3RvciIsInByb2ZpbGVFZGl0QnV0dG9uIiwibmFtZVRpdGxlIiwibmFtZURlc2NyaXB0aW9uIiwiY2FyZENyZWF0ZUJ1dHRvbiIsImZvcm1WYWxpZGF0b3JzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsInRoaXMiLCJfdGl0bGUiLCJ0aXRsZSIsIl9pbWdVcmwiLCJpbWdVcmwiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2NhcmRTZWxlY3RvciIsIl9kZWxldGVCdXR0b24iLCJfZ2V0VGVtcGxhdGUiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2NhcmRJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJpbWdTcmMiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJpbWdBbHQiLCJfZWxlbWVudCIsIl9kZWxldGVDYXJkIiwiYmluZCIsIl90b2dnbGVMaWtlIiwiY2xvc2VzdCIsInJlbW92ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImdlbmVyYXRlQ2FyZCIsIl9jYXJkVGl0bGUiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImtleSIsImNsb3NlIiwiX3NlbGVjdG9yIiwiX3BvcHVwIiwiX3BvcHVwQ2xvc2VCdXR0b24iLCJfaGFuZGxlUmVtb3RlQ2xpY2tDbG9zZSIsImJhY2tncm91bmQiLCJvcGVuIiwiYWRkIiwiX2hhbmRsZUVzY0Nsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldEV2ZW50TGlzdGVuZXJzIiwiUG9wdXBXaXRoRm9ybSIsInN1Ym1pdENhbGxiYWNrIiwic3VwZXIiLCJfc3VibWl0Q2FsbGJhY2siLCJfZm9ybSIsIl9pbnB1dExpc3QiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJmb3JtVmFsdWVzIiwiZm9yRWFjaCIsImlucHV0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsImNhcmRMaXN0IiwiX3JlZiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXJXcmFwcGVyIiwicmVuZGVySXRlbXMiLCJpdGVtIiwibmV3SXRlbSIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsImxpbmsiLCJjcmVhdGVDYXJkIiwicHJvZmlsZUZvcm1Qb3B1cCIsImZvcm1EYXRhIiwicmVuZGVyVXNlclByb2ZpbGVJbmZvIiwic2V0VXNlckluZm8iLCJqb2JUaXRsZSIsImFib3V0bWUiLCJhZGRDYXJkRm9ybSIsImNhcmRFbGVtZW50IiwiaW1hZ2VsaW5rIiwicG9wdXBXaXRoSW1hZ2UiLCJfcG9wdXBJbWciLCJfcG9wdXBJbWdEZXNjcmlwdGlvbiIsIl9zZXRJbWFnZVByb3BlcnRpZXMiLCJfaW1nU3JjIiwiX2ltZ0FsdCIsInNldHRpbmdzIiwiZXJyb3JTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0RXJyb3JDbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJlcnJvckNsYXNzIiwiQXJyYXkiLCJmcm9tIiwiZm9ybUlucHV0IiwidmFsaWRhdG9yIiwiZm9ybUVsZW1lbnQiLCJldmVyeSIsInZhbGlkaXR5IiwidmFsaWQiLCJfZm9ybUVsZW1lbnQiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiX2Zvcm1TZWxlY3RvciIsIl9idXR0b24iLCJpbnB1dEl0ZW0iLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2hpZGVFcnJvciIsIl9zaG93RXJyb3IiLCJlcnJvckVsZW1lbnQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9jaGVja0Zvcm1WYWxpZGl0eSIsImRpc2FibGVkIiwicmVzZXRWYWxpZGF0aW9uIiwiaW5wdXRFbGVtZW50IiwiZW5hYmxlVmFsaWRhdGlvbiIsImZvcm1OYW1lIiwibmFtZVNlbGVjdG9yIiwiZGVzY3JpcHRpb25TZWxlY3RvciIsIl9uYW1lRWxlbWVudCIsIl9kZXNjcmlwdGlvbkVsZW1lbnQiLCJnZXRVc2VySW5mbyIsIl9yZWYyIiwiQ2FyZCIsInVzZXJJbmZvIiwiZm9ybWFkZCJdLCJzb3VyY2VSb290IjoiIn0=