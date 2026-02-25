import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-representacion-informacion',
  imports: [RouterLink],
  templateUrl: './representacion-informacion.html',
  styleUrl: './representacion-informacion.css',
})
export class RepresentacionInformacion {
  router = inject(ActivatedRoute);

  ngOnInit() {
    this.router.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

}
