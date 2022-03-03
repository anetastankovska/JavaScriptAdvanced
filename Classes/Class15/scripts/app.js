class App {
    constructor() {
        this.service = new PhoneService();
    }

    async init() {
        await this.showLeftPanel();

        this.handleLeftPanelEvent();
    }

    async showLeftPanel() {
        const element = document.getElementById('left-panel-brands');
        let data = await this.service.getPhoneBrands();
        console.log(data);
        element.innerHTML = data.map(x => PhoneBrand.generatePhoneLinkListItem(x)).join('');
    }

    async showRightPanel(brandId) {
        const element = document.querySelector('.right-panel');
        element.innerHTML = '';
        let phoneData = await this.service.getPhoneBrand(brandId);
        let h1 = document.createElement('h1');
        h1.style.textAlign = 'center';
        h1.innerText = phoneData.title;
        
        element.appendChild(h1);
        element.innerHTML += phoneData
            .phones
            .map(Phone.generatePhoneCardItem)
            .reduce((current, prev, index) => {
                if (index === 0) {
                    current += `<div class="card-group">`;
                } else if (index % 3 === 0) {
                    current += `</div><div class="card-group">`
                }
                current += prev;
                return current;
            }, '');
    }

    handleLeftPanelEvent() {
        document
            .getElementById('left-panel-brands')
            .addEventListener('click', async ({ target }) => {
                console.log(target);
                await this.showRightPanel(target.id);
            });
    }

    handeRightPanelEvent() {
        // lots of code
    }
}


new App().init();
