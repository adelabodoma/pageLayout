import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  public FAQ = [
    {
      question: "Why is the moon sometimes out during the day?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "Why is the sky blue?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    }
  ]
  constructor() { }

  ngOnInit(): void {

    // document.querySelectorAll('.accordion a').forEach(ele => {
    //   ele.addEventListener('click', () => {
    //     ele.classList.toggle('active');
    //     ele.nextElementSibling.classList.toggle('active')
    //   })
    // })
  }

  onClassActive(faq) {
    faq.active = !faq.active
  }

  onAddFAQ(form: NgForm){
    const {question, answer } = form.value;
    this.FAQ.push({question, answer});
    form.reset();
  }
}
