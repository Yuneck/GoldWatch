const assets = [];

const purhcases = [];

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
    weight: null, //from lists.batTypes for bars
    measurementUnit: '',  //from measurementUnits
    dimension: [], //from dimensionType
    yearOfEdition: null, //only for coins
    denomination: '', 
}

const dimensionType = {
    diameter: null, //for coin
    thickness: null, //for coin and bar
    lenght: null,   //for bar
    width: null,    //for bar
}

const picture = {
    pic1: null,
    pic2: null,
    pic3: null,
}