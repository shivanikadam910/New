import './Category.css';
import React from 'react';


class Message extends React.Component {
render() {
   return (
    <form class="search_bar"><br />
    <input type="text" placeholder="Search by different category" name="search" class="search_text" />
  <button type="submit" class = "btn_search"><i class="fa fa-search"></i></button>
   <br />
   <button class = "category">First Name </button>
   <button class = "category">Last Name </button>
   <button class = "category">User Name </button>
   <button class = "category">Institute Name </button>
   <ul id='friend-list'>
    <li class='friend'>
    <img src='https://i.imgur.com/nkN3Mv0.jpg' />
    <div class='name'>
      <br />Test A
      <div class = 'uname'>@username_a</div>
      <div class = 'cname'>College name</div>
    </div>
    <button onClick="" class = 'btn'>chat</button>
  </li>
  <li class='friend'>
    <img src='https://i.imgur.com/0I4lkh9.jpg' />
    <div class='name'>
      Test B 
      <div class = 'uname'>@username_b</div>
      <div class = 'cname'>College name</div>
    </div>
    <button onClick="" class = 'btn'>chat</button>
  </li>
  <li class='friend'>
    <img src='https://i.imgur.com/s2WCwH2.jpg' />
    <div class='name'>
      Test C
      <div class = 'uname'>@username_c</div>
      <div class = 'cname'>College name</div>
    </div>
    <button onClick="" class = 'btn'>chat</button>
  </li>
  <li class='friend'>
    <img src='https://i.imgur.com/rxBwsBB.jpg' />
    <div class='name'>
      Test D
      <div class = 'uname'>@username_d</div>
      <div class = 'cname'>College name</div>
    </div>
    <button onClick="" class = 'btn'>chat</button>
  </li>
  <li class='friend'>
    <img src='https://i.imgur.com/tovkOg2.jpg' />
    <div class='name'>
      Test E
      <div class = 'uname'>@username_e</div>
      <div class = 'cname'>College name</div>
    </div>
    <button onClick="" class = 'btn'>chat</button>
  </li>
  <li class='friend'>
    <img src='https://i.imgur.com/A7lNstm.jpg' />
    <div class='name'>
      Test F
      <div class = 'uname'>@username_f</div>
      <div class = 'cname'>College name</div>
     </div>
     <button onClick="" class = 'btn'>chat</button>
  </li>
  
  
</ul>
</form>
  );

}
}
export default Message;
