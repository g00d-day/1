function yp_emb_resp_check(){
    if ( (navigator.userAgent.match(/Mobi/) || navigator.userAgent.match(/Android/)) && window.innerHeight > window.innerWidth ) {
        var oL = ( typeof(document.getElementById('ypembedcontainer').offsetLeft) == "undefined" ) ? 0 : document.getElementById('ypembedcontainer').offsetLeft;
        var h = (window.innerWidth - oL)*parseInt(document.getElementById('ypembedcontainer').getAttribute('data-page-height'))/parseInt(document.getElementById('ypembedcontainer').getAttribute('data-page-width')) | 0;
        h = (h>window.innerHeight) ? window.innerHeight:h;
        document.getElementById('ypembedcontainer').style.width = window.innerWidth+'px';
        document.getElementById('ypembedcontainer').style.height = h+'px';
    } else {
        document.getElementById('ypembedcontainer').style.width = '100%';
        document.getElementById('ypembedcontainer').style.height = '100%';
    }
}
window.addEventListener('resize', yp_emb_resp_check, true);yp_emb_resp_check();