export default (date) => {
    const dateElemente = document.createElement("li");
    dateElemente.classList.add("date");
    dateElemente.innerHTML = date;
    return dateElemente;
};