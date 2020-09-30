$(document).ready(function () {
    database.collection('profile').get().then((data) => {
        var result = "";
        data.forEach(element => {
            result +=`
            <div class="resume_left">
            <div class="resume_profile">
              <img src="photos.png" alt="profile_pic" style="width: 200px; height: 210px; margin: 10px 45px 15px; border-radius: 300px;">
            </div>
            <div class="resume_content">
              <div class="resume_item resume_info">
                <div class="title">
                  <p class="bold">${element.data().name}</p>
                  <p class="regular">${element.data().major}</p>
                </div>
                <ul>
                  <li>
                    <div class="icon">
                      <i class="fas fa-map-signs"></i>
                    </div>
                    <div class="data">
                    ${element.data().address}
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="data">
                    ${element.data().tel}
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="data">
                    ${element.data().email}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="resume_item resume_skills">
                <div class="title">
                  <p class="bold">skill's</p>
                </div>
                <ul>
                  <li>
                    <div class="skill_name">
                      HTML
                    </div>
                    <div class="skill_progress">
                      <span style="width: 80%;"></span>
                    </div>
                    <div class="skill_per">80%</div>
                  </li>
                  <li>
                    <div class="skill_name">
                      CSS
                    </div>
                    <div class="skill_progress">
                      <span style="width: 70%;"></span>
                    </div>
                    <div class="skill_per">70%</div>
                  </li>
                  <li>
                    <div class="skill_name">
                     PHP
                    </div>
                    <div class="skill_progress">
                      <span style="width: 70%;"></span>
                    </div>
                    <div class="skill_per">70%</div>
                  </li>
                  <li>
                    <div class="skill_name">
                      JS
                    </div>
                    <div class="skill_progress">
                      <span style="width: 60%;"></span>
                    </div>
                    <div class="skill_per">60%</div>
                  </li>
                  <li>
                    <div class="skill_name">
                      Laravel
                    </div>
                    <div class="skill_progress">
                      <span style="width: 80%;"></span>
                    </div>
                    <div class="skill_per">80%</div>
                  </li>
                  <li>
                    <div class="skill_name">
                      java
                    </div>
                    <div class="skill_progress">
                      <span style="width: 70%;"></span>
                    </div>
                    <div class="skill_per">70%</div>
                  </li>
                  <li>
                    <div class="skill_name">
                      Bootstrap
                    </div>&nbsp;
                    <div class="skill_progress">
                      <span style="width: 80%;"></span>
                    </div>
                    <div class="skill_per">80%</div>
                  </li>
                </ul>
              </div>
              <div class="resume_item resume_social">
                <div class="title">
                  <p class="bold">Social</p>
                </div>
                <ul>
                  <li>
                    <div class="icon">
                      <i class="fab fa-facebook-square"></i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Facebook</p>
                      <p>Chanly@facebook</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fab fa-instagram-square"></i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Instargram</p>
                      <p>chanly@instargram</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fab fa-youtube"></i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Youtube</p>
                      <p>chanly@youtube</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fab fa-telegram"></i>
                    </div>
                    <div class="data">
                      <p class="semi-bold">Telegram</p>
                      <p>chanly@telegram</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
         </div>
         <div class="resume_right">
           <div class="resume_item resume_about">
               <div class="title">
                  <p class="bold">Personal Information</p>
                </div>
               <p class="semi-bold"><b>Date Of Birth:</b>${element.data().hbd}</p><br>
               <p class="semi-bold"><b>Place Of Birth:</b>${element.data().province}</p><br>
               <p class="semi-bold"><b>Country:</b>${element.data().country}</p><br>
               <p class="semi-bold"><b>Status:</b>${element.data().status}</p>
           </div>
           <div class="resume_item resume_work">
               <div class="title">
                  <p class="bold">Work Experience</p>
                </div>
               <ul>
                   <li>
                       <div class="date">14 June-30 June 2019: Virtual Company</div> 
                       <div class="info">
                         <p>- Build PNC canteen website, use 2 languages including HTML and CSS</p> 
                         <p>- Responsible on creating menu and sub menu page, contact us page, design logo, mock up and combine code</p>
                       </div>
                   </li>
                   <li>
                     <div class="date">06 july-14 August 2020</div>
                     <div class="info">
                         <p>- Meeting with client and discuss about project</p> 
                         <p>- Project management(analyzing project, design, resourcing, plannign)</p>
                         <p>- Project development(Mock up, coding, demo, testing)</p>
                         <p>- Project languages are PHP, Javascript, HTML, CSS, Bootstrap, PHP Laravel</p>
                     </div>
                   </li>
               </ul>
           </div>
           <div class="resume_item resume_education">
             <div class="title">
                  <p class="bold">Education Background</p>
                </div>
             <ul>
                   <li>
                       <div class="date">2018 - 2020</div> 
                       <div class="info">
                            <p class="semi-bold">Major: WEP Programming</p> 
                         <p>Associate degree at Passerelles Numeriques Cambodia(PNC)</p>
                       </div>
                   </li>
                   <li>
                     <div class="date">2017 - 2018</div>
                     <div class="info">
                            <p class="semi-bold">Student at High School</p> 
                         <p>Student at Mohaleap High School</p>
                       </div>
                   </li>
               </ul>
           </div>
           <div class="resume_item resume_hobby">
             <div class="title">
                  <p class="bold">Hobby</p>
                </div>
              <ul>
                <li><i class="fas fa-book"></i></li>
                <li><i class="fas fa-gamepad"></i></li>
                <li><i class="fas fa-music"></i></li>
                <li><i class="fab fa-pagelines"></i></li>
             </ul>
           </div>
         </div>
            `
        });
        $('#resume').append(result);
    })
});