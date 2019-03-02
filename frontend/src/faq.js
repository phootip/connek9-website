import React from 'react';
import FullScreen from './full-screen';

const FAQ = () => (
  <FullScreen>
    <div className="container" style={{display: 'flex', height: '100%'}}>
      <div className="about header container"
        style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
      >
        <div className="splash logo">
          <h1> About Connek </h1>
        </div>
      </div>
      <div className="about text container"
        style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2em'}}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi aliquid, deserunt esse quo veritatis corporis eveniet in nihil dolorem, dicta recusandae vitae veniam perspiciatis ipsum illum amet nesciunt sunt!
        Laudantium itaque ipsum eius, sapiente repudiandae facere vitae obcaecati enim nostrum, vero nam et. Autem, maiores, aperiam sapiente nobis sequi ullam quaerat voluptas aliquid molestias, voluptates veniam provident vero animi.
        Illum quod pariatur vitae consectetur ipsam! Voluptate quos quisquam natus deserunt quaerat ullam nihil recusandae voluptas sapiente accusamus unde, nam, suscipit atque dolorum magnam doloremque aut, vitae sequi ab minus?
        Asperiores tempore autem quibusdam laboriosam libero pariatur iure, optio eveniet cum repellendus inventore fugiat, fugit perspiciatis minima? Distinctio, illo asperiores? Aut pariatur rerum tenetur eum dolor excepturi temporibus minus quae?
        Error neque architecto quae dignissimos odit rerum minus dolorem itaque, esse eaque assumenda, exercitationem veritatis? Veniam voluptas doloremque magni libero ducimus pariatur sapiente laudantium expedita. Quo quod earum rem error?
      </div>
    </div>
  </FullScreen>
)

export default FAQ