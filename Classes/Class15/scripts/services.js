class PhoneService {
    constructor() {
        this.baseUrl = "https://api-mobilespecs.azharimm.site/v2/";
        this.apiUrls = {
            brandUrl: `${this.baseUrl}brands/`
        }
    }

    getPhoneBrands() {
        return fetch(this.apiUrls.brandUrl)
            .then(res => res.json())
            .then(({ status, data }) => data.map(phone => new PhoneBrand(phone.brand_id, phone.brand_name, phone.brand_slug, phone.device_count, phone.detail)));
    }

    getPhoneBrand(brand) {
        return fetch(this.apiUrls.brandUrl + brand)
            .then(res => res.json())
            .then(({ status, data }) => {
                const phones = data.phones.map(x => new Phone(x));
                return new PhoneBrandDetail(data.title, data.current_page, data.last_page, phones);
            }).catch(error => {
                // redirect to error page
            });
    }
}