export const getDiscountedPricePercentage = ( discountedPrice,originalPrice)=>{
    const discount= originalPrice-discountedPrice;

    const discountPercentage = (discount/originalPrice)*100;
    return discountPercentage.toFixed(2);

} 