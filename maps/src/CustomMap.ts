export interface Mappable {
  location: {
    lat: number;
    lng: number;
  },
  markerContent():string,
  color: string
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor (selector: string) {
    this.googleMap = new google.maps.Map(document.querySelector(selector) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    });
  }

  // property only accessible if it's available in both User and Company
  // not allowed to refer to company.companyName and user.name
  // addMarker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     }
  //   })
  // }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      })

      infoWindow.open(this.googleMap, marker);
    })
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     }
  //   })
  // }
}