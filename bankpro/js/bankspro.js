'use strict';
$(function () {
    localStorage.getItem('compareOffersArray') ?
        banksPro.compareOffersArray = JSON.parse(localStorage.getItem('compareOffersArray')) :
        localStorage.setItem('compareOffersArray', '[]');

    localStorage.getItem('favoritesOffersArray') ?
        banksPro.favoritesOffersArray = JSON.parse(localStorage.getItem('favoritesOffersArray')) :
        localStorage.setItem('favoritesOffersArray', '[]');

    banksPro.refreshCounters();
    banksPro.refreshTable(banksPro.compareOffersArray);
    banksPro.refreshTable(banksPro.favoritesOffersArray);

    banksPro.registerEvents();

    $.notify.defaults({ position:"right-bottom"});

});

let banksPro =  {

    compareOffersArray: [],
    favoritesOffersArray: [],

    counters: {
        favorites: 0,
        compares: 0
    },

    refreshCounters: () => {
        banksPro.counters.favorites = banksPro.favoritesOffersArray.length;
        banksPro.counters.compares = banksPro.compareOffersArray.length;

        $('#favorites-counter').html(banksPro.counters.favorites);
        $('#compares-counter').html(banksPro.counters.compares);
    },

    incrementFavorites: (id) => {
        banksPro.favoritesOffersArray.push(id);
        localStorage.setItem('favoritesOffersArray', JSON.stringify(banksPro.favoritesOffersArray));
        banksPro.refreshCounters();
    },

    decrementFavorites: (id) => {
        banksPro.favoritesOffersArray.splice(banksPro.favoritesOffersArray.indexOf(id.toString()), 1);
        localStorage.setItem('favoritesOffersArray', JSON.stringify(banksPro.favoritesOffersArray));
        banksPro.refreshCounters();
    },

    incrementCompares: (id) => {
        banksPro.compareOffersArray.push(id);
        localStorage.setItem('compareOffersArray', JSON.stringify(banksPro.compareOffersArray));
        banksPro.refreshCounters();
    },

    decrementCompares: (id) => {
        banksPro.compareOffersArray.splice(banksPro.compareOffersArray.indexOf(id.toString()), 1);
        localStorage.setItem('compareOffersArray', JSON.stringify(banksPro.compareOffersArray));
        banksPro.refreshCounters();
    },

    refreshTable: (dataArray = [])  =>{
        dataArray.forEach((item) => {
            $('.offer-main__block').each((index, element) => {
                if ($(element).attr('data-id') === item) {
                    if (dataArray === banksPro.compareOffersArray) {
                        $(element).find('.to-compare').toggle();
                        $(element).find('.from-compare').toggle();
                    } else {
                        $(element).find('.to-favorites').toggle();
                        $(element).find('.from-favorites').toggle();
                    }
                }
            });
        });
    },

    registerEvents: () => {
        $('.to-compare').click(function () {
            let offerId = $(this).parent().parent().attr('data-id');
            $(this).parent().find('.to-compare').toggle();
            $(this).parent().find('.from-compare').toggle();
            banksPro.incrementCompares(offerId);
            $.notify('Оффер успешло добавлен в список сравнения', 'success')

        });

        $('.from-compare').click(function () {
            let offerId = $(this).parent().parent().attr('data-id');
            $(this).parent().find('.to-compare').toggle();
            $(this).parent().find('.from-compare').toggle();
            banksPro.decrementCompares(offerId);
            $.notify('Оффер успешло удален из списка сравнения', 'info')
        });

        $('.to-favorites').click(function () {
            let offerId = $(this).parent().parent().attr('data-id');
            $(this).parent().find('.to-favorites').toggle();
            $(this).parent().find('.from-favorites').toggle();
            banksPro.incrementFavorites(offerId);
            $.notify('Оффер успешло добавлен в избранное', 'success')
        });

        $('.from-favorites').click(function () {
            let offerId = $(this).parent().parent().attr('data-id');
            $(this).parent().find('.to-favorites').toggle();
            $(this).parent().find('.from-favorites').toggle();
            banksPro.decrementFavorites(offerId);
            $.notify('Оффер успешно удален из избранного', 'info')
        })
    },
    sendRating: (offerId) => {
        let ratingArray = [];

        $('.ratings').each(function (key, item) {
            let name = $(item).attr('name');
            ratingArray.push({name: name, val: $(item).val()});
        });

        $.ajax({
            type: "POST",
            url: '/site/rating',
            data: {
                offer_id: offerId,
                ratingArray: JSON.stringify(ratingArray)
            },
            success: function (result) {
                console.log(result);
                $('#popover__rating').hide(200);
                $.notify('Данные оценки оффера успешно отравлены.', 'info');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Проблемы с получением данных')
            },
        });
    }
};

