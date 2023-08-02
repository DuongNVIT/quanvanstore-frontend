const formatMoney = (money) => {
    if(!money) return;
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default formatMoney;

