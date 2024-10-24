const assets = [];

const purhcases = [];

const singleAsset = {
    id: null,
    purchaseId: '', // = id from purchase
    type: '',  //from assetType
    number: '',
    price: null, 
    name: '',
    groupName: '',
    quantity: null, //number of assets bought within one purchase
    manufacturer: '',
    fineness: '',
    picture: [], //collection of pictures from picture
    pureMetalContent: null, //gramms
    weight: null,
    measurementUnit: '',  //from measurementUnits
    dimension: [], //from dimensionType
}

const assetType = {
    g: 'Gold',
    s: 'Silver',
    pl: 'Platinum',
    pa: 'Palladium',
}

const measurementUnits = {
    gr: 'gr',
    kg: 'kg',
    oz: 'oz',
    pcs: 'pcs'
}

const dimensionType = {
    diameter: null, //for coin
    thikness: null, //for coin and bar
    lenght: null,   //for bar
    width: null,    //for bar
}

const purchase = {
    id: null,
    date: null,
    value: null,
    currency: null, //currency id
    sellerName: '',
    assetsIds: [], //collection od assets ids from singleAsset.id
    nultipack: null,
    multipackQuantity: null,
}

const currency = {
    id: '',
    name: '',
}

const picture = {
    pic1: null,
    pic2: null,
    pic3: null,
}