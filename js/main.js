// Handlebars: templating for Tea of Month image section.

const source_tom = document.getElementById('tea-of-month-js').innerHTML;
const template_tom = Handlebars.compile(source_tom);

const context_tom = {
    teaOfMonth: [
        {
            teaName: 'Fall Berry Blitz Tea',
            imgUrl: 'img/img-berryblitz.jpg',
            active: true
        },
        {
            teaName: 'Spiced Rum Tea',
            imgUrl: 'img/img-spiced-rum.jpg',
            active: true
        },
        {
            teaName: 'Seasonal Donuts',
            imgUrl: 'img/img-donut.jpg',
            active: true
        },
        {
            teaName: 'Myrtle Ave Tea',
            imgUrl: 'img/img-myrtle-ave.jpg',
            active: true
        },
        {
            teaName: 'Bedford Bizarre Tea',
            imgUrl: 'img/img-bedford-bizarre.jpg',
            active: true
        } /* Experimenting with adding extra teas */,
        {
            teaName: 'Green Tea',
            imgUrl: 'img/add-green-tea.png',
            active: true
        },
        {
            teaName: 'Worst Tea on Earth',
            imgUrl: 'img/add-worst.jpg',
            active: true
        },
        {
            teaName: 'Vanilla Tea',
            imgUrl: 'img/add-vanilla.jpg',
            active: true
        }
    ]
}

const compiledHtml_tom = template_tom(context_tom);
document.getElementById('tom-images-id').innerHTML = compiledHtml_tom;

// Handlebars: templating for locations section.

const source_loc = document.getElementById('loc-js').innerHTML;
const template_loc = Handlebars.compile(source_loc);

const context_loc = {
    locationList: [
        {
            locName: 'Downtown',
            locLine1: '384 West 4th St',
            locLine2: 'Suite 108',
            locLine3: 'Portland, Maine',
            active: true
        },
        {
            locName: 'East Bayside',
            locLine1: '3433 Phisherman\'s Avenue',
            locLine2: '(Northwest Corner)',
            locLine3: 'Portland, Maine',
            active: true
        },
        {
            locName: 'Oakdale',
            locLine1: '515 Crescent Avenue',
            locLine2: 'Second Floor',
            locLine3: 'Portland, Maine',
            active: true
        } /* Experimenting with adding extra locations */,
        {
            locName: 'Canberra',
            locLine1: '15 Melbourne Avenue',
            locLine2: '1000th Floor',
            locLine3: 'Canberra, Australia',
            active: true
        },
        {
            locName: 'Canberra',
            locLine1: '60 Northbourne Avenue',
            locLine2: '-5th Floor',
            locLine3: 'Canberra, Australia',
            active: true
        }
    ]
}

const compiledHtml_loc = template_loc(context_loc);
document.getElementById('location-box-container-id').innerHTML = compiledHtml_loc;