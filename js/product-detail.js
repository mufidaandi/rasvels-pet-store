var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


var productId = getUrlParameter('productId');
getProductById(productId).then(function(product){
    console.log(product);
    jQuery('#product-name').text(product.name)
    jQuery('#product-description').html(product.description);
    jQuery('#product-price').text('$'+ product.price);
    jQuery('#product-quantity').text(product.quantity);
    jQuery('#product-short-desc').text(product.name);
    var strHover = '';
    var strThumb = '';
    product.images.forEach(element => {
        strHover += '<div class="single-slide zoom-image-hover" > <img class="img-responsive" src="'+ element +'" alt=""> </div>'
        strThumb += '<div class="single-slide"><img class="img-responsive" src="' + element +'" alt=""></div>';
    });
    jQuery('#product-images-hover').html(strHover);
    jQuery('#product-images-thumb').html(strThumb);

    /*----------------------------- single product Slider  ------------------------------ */
    jQuery('.single-product-cover').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.single-nav-thumb',
    });

    jQuery('.single-nav-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.single-product-cover',
        dots: false,
        arrows: true,
        focusOnSelect: true
    });
    /*----------------------------- Product Image Zoom --------------------------------*/
    jQuery('.zoom-image-hover').zoom();
    /*----------------------------- single product countdowntimer  ------------------------------ */
    jQuery("#ec-single-countdown").countdowntimer({
        startDate : "2023/03/01 00:00:00",
        dateAndTime : "2023/05/01 00:00:00",
        labelsFormat : true,
        displayFormat : "DHMS"
    });

    /*----------------------------- Qty Plus Minus Button  ------------------------------ */
    var QtyPlusMinus = jQuery(".qty-plus-minus");
    QtyPlusMinus.prepend('<div class="dec ec_qtybtn">-</div>');
    QtyPlusMinus.append('<div class="inc ec_qtybtn">+</div>');

    jQuery("body").on("click", ".ec_qtybtn", function(){

        // jQuery(".ec_qtybtn").on("click", function() {
        var $qtybutton = jQuery(this);
        var QtyoldValue = $qtybutton.parent().find("input").val();
        if ($qtybutton.text() === "+") {
            var QtynewVal = parseFloat(QtyoldValue) + 1;
        } else {

            if (QtyoldValue > 1) {
                var QtynewVal = parseFloat(QtyoldValue) - 1;
            } else {
                QtynewVal = 1;
            }
        }
        $qtybutton.parent().find("input").val(QtynewVal);
    });
});


jQuery(document).ready(function() {
    
});

