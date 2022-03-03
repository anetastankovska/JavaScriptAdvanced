class PhoneBrand {
    constructor(id, name, brandId, deviceCount, detailsUrl) {
        this.id = id;
        this.name = name;
        this.brandId = brandId;
        this.deviceCount = deviceCount;
        this.detailsUrl = detailsUrl;
    }

    static generatePhoneLinkListItem(phoneBrand) {
        return `<li id="${phoneBrand.brandId}" class="list-group-item">${Helpers.setFirstLetterToCapital(phoneBrand.name)} (${phoneBrand.deviceCount})</li>`
    }
}


class PhoneBrandDetail {
    constructor(title, currentPage, lastPage, phones) {
        this.title = title;
        this.currentPage = currentPage;
        this.lastPage = lastPage;
        this.phones = phones;
    }
}

class Phone {
    constructor({ brand, phone_name, slug, image, detail }) {
        this.brand = brand;
        this.name = phone_name;
        this.brandId = slug;
        this.imageUrl = image;
        this.detailUrl = detail;
    }

    static generatePhoneCardItem(phone) {
        return `<div class="card" style="width: 18rem;">
                    <img src="${phone.imageUrl}" class="card-img-top" alt="${phone.name}">
                    <div class="card-body">
                        <h5 class="card-title">${phone.name}</h5>
                        <a href="${phone.detailUrl}" target="_blank" class="btn btn-primary">More details</a>
                    </div>
                </div>`;
    }
}


class Helpers {
    static setFirstLetterToCapital(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}