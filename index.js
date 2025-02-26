import{a as n}from"./assets/vendor-BafiVLTW.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=n.create({baseURL:"https://pixabay.com/api/",params:{key:"49074776-667ebd81d42a28579e0443e2e",image_type:"photo",orientation:"horizontal",safesearch:"true"}});function g(){return u.get().then(r=>r.data.hits)}function m(r){const{webformatURL:l,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:c}=r;return`<li class="gallery-item">
          <a class="gallery-link" href="${s}" onclick="return false;">
            <img
              class="gallery-image"
              src="${l}"
              alt="${i}"
            />
          </a>
          <div class="gallery-wrapper">
            <ul class="gallery-group">
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Likes</h2>
                <p class="gallery-txt">${e}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Views</h2>
                <p class="gallery-txt">${t}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Comments</h2>
                <p class="gallery-txt">${a}</p>
              </li>
              <li class="gallery-list">
                <h2 class="gallery-subtitle">Downloads</h2>
                <p class="gallery-txt">${c}</p>
              </li>
            </ul>
          </div>
        </li>`}function f(r){return r.map(m).join("")}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")};o.form.addEventListener("submit",y);function y(r){r.preventDefault(),r.target.elements.search.value,g().then(l=>{const s=f(l);o.gallery.innerHTML=s}).catch(window.alert(`Sorry, there are no images matching your search query. Please try again!
  `)),r.target.reset()}
//# sourceMappingURL=index.js.map
