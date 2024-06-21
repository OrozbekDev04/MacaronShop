import cls from "./corporate.module.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LogoSlider from "./Slider/LogoSlider";
import CardMedia from '@mui/material/CardMedia';
import grey from "../../assets/img/Ayana/company/grey.png"
import pro from "../../assets/img/Ayana/produt/pro.png"
import prod from "../../assets/img/Ayana/produt/prod.png"
import produ from "../../assets/img/Ayana/produt/produ.png"
import macoron from "../../assets/img/Ayana/macoro.png"
import pr from "../../assets/img/Ayana/produt/pr.png"


const Corporate = () => {
  return (
    <div className="container">
        <div className={cls.flex}>
            <div className={cls.pic}>
              <div className={cls.picter}>
                <img src={macoron} alt="" />
              </div>
              <div className={cls.text}>
                <h2 className={cls.teh2xt}>Корпоративные подарки</h2>
                <p className={cls.tpext}>Брендированные пирожные макарон, которые поднимут <br /> аппетит ваших клиентов или порадуют коллектив</p>
                <p className={cls.ptextp}>Поднять мотивацию сотрудников? Увеличить лояльность клиентов или расположить их к <br /> себе перед большой сделкой? <br />
                  Мы приготовим наборы пирожных от 200 руб за шт, сделаем индивидуальный дизайн и <br /> нанесём ваши лого. Обычно готовим за 2-3 дня. </p>
                  <div className={cls.buts}>
                  <button className={cls.but}>Скачать весь каталог подарков</button>
                </div>
              </div>
            </div>
            <div className={cls.present}>
             <h2 className={cls.texth2}>Некоторые варианты подарков</h2>
             <div className={cls.cards}>
             <Card sx={{ width: 271, height: 413 }}>
             <CardContent>
              <CardMedia component="img" sx={{ width: 243, height: 192 }} image={prod} alt="" />
            <Typography sx={{ fontSize: 18, marginTop: '1rem' }} gutterBottom>
            3 макарона с печатью
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '1rem' }} color="text.secondary">
            В пластиковой упаковке самый бюджетный вариант
            </Typography>
            <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '1rem', marginBottom: '1rem' }}></div>
            <Typography style={{color: "rgba(231, 66, 106, 1)" }}>от 150 шт/руб</Typography>
          </CardContent>
             </Card>
             <Card sx={{ width: 271, height: 413 }}>
             <CardContent>
              <CardMedia component="img" sx={{ width: 243, height: 192 }} image={pro} alt="" />
            <Typography sx={{ fontSize: 18, marginTop: '1rem' }} gutterBottom>
             9 макарон с печатью
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '1rem' }} color="text.secondary">
             С логотипом Вашей копании, пожеланиями и т.д.
            </Typography>
            <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '1rem', marginBottom: '1rem' }}></div>
            <Typography  style={{color: "rgba(231, 66, 106, 1)" }}>от 500 руб</Typography>
          </CardContent>
             </Card>
             <Card sx={{ width: 271, height: 413 }}>
             <CardContent>
              <CardMedia component="img" sx={{ width: 243, height: 192 }} image={produ} alt="" />
            <Typography sx={{ fontSize: 18, marginTop: '1rem' }} gutterBottom>
              Круглый набор, 40 шт.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '1rem' }} color="text.secondary">
            Роскошный подарок для большой компании
            </Typography>
            <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '1rem', marginBottom: '1rem' }}></div>
            <Typography  style={{color: "rgba(231, 66, 106, 1)" }}>от 3600 руб</Typography>
          </CardContent>
             </Card>
             <Card sx={{ width: 271, height: 413 }}>
             <CardContent>
              <CardMedia component="img" sx={{ width: 243, height: 192 }} image={pro} alt="" />
            <Typography sx={{ fontSize: 18, marginTop: '1rem' }} gutterBottom>
            Набор на 70 шт.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '1rem' }} color="text.secondary">
              Для самых любимых и дорогих клиентов
            </Typography>
            <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '1rem', marginBottom: '1rem' }}></div>
            <Typography  style={{color: "rgba(231, 66, 106, 1)" }}>от 5600 руб</Typography>
          </CardContent>
             </Card>
      </div>
      <button className={cls.btn} style={{ display: 'block', margin: '1rem auto' }}>
        Получить КП
      </button>
           </div>
            <div className={cls.orders}>
                <h3 className={cls.texth2}>Мы уже выполнили заказы</h3>
                <div className={cls.cards}>
                <Card sx={{ width: 271, height: 272 }}>
                 <CardContent>
                    <CardMedia
                      component="img"
                     sx={{ width: 243, height: 192 }}
                     image={grey} alt=""/>
                 <Typography variant="body2" sx={{marginTop: "1rem"}}>Макароны для отеля “Бла бла”</Typography>
                </CardContent>
                </Card>
                <Card sx={{ width: 271, height: 272 }}>
                 <CardContent>
                    <CardMedia
                      component="img"
                     sx={{ width: 243, height: 192 }}
                     image={grey} alt=""/>
                 <Typography variant="body2" sx={{marginTop: "1rem"}}>Набор для кафе “Мята”</Typography>
                </CardContent>
                </Card>
                <Card sx={{ width: 271, height: 272 }}>
                 <CardContent>
                    <CardMedia
                      component="img"
                     sx={{ width: 243, height: 192 }}
                     image={grey} alt=""/>
                 <Typography variant="body2" sx={{marginTop: "1rem"}}>Макароны для отеля “Бла бла”</Typography>
                </CardContent>
                </Card>
                <Card sx={{ width: 271, height: 272 }}>
                 <CardContent>
                    <CardMedia
                      component="img"
                     sx={{ width: 243, height: 192 }}
                     image={grey} alt=""/>
                 <Typography variant="body2" sx={{marginTop: "1rem"}}>Набор для кафе “Мята”</Typography>
                </CardContent>
                </Card>
                </div>
            </div>
            <div className={cls.company}>
                <LogoSlider/>
            </div>
            <div className={cls.question}>
                <h2 className={cls.texth2}>Ответы на вопросы</h2>
                <div className={cls.comm}>        
                <div>
                <Card sx={{ width: "370px", border: "1px solid #EDEDF0",  marginTop: "1rem" }}>
                 <CardContent>
                  <Typography variant="h5" component="div">Сколько хранятся пирожные  <br />макарон?</Typography>
                  <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '10px', marginBottom: '10px'}}></div>
                  <Typography sx={{color: "#292929"}}>Срок хранения бла бла</Typography>
                </CardContent>
                </Card>
                <Card sx={{ width: "370px", height: "222px", border: "1px solid #EDEDF0",  marginTop: "1rem" }}>
                 <CardContent>
                  <Typography variant="h5" component="div">СА с НДС работаете?</Typography>
                  <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '10px', marginBottom: '10px'}}></div>
                  <Typography sx={{color: "#292929"}}>Для вашего удобства у нас есть два варианта взаимодействия: с НДС и без НДС. Всегда уточняйте форму оплаты у менеджера, чтобы получить максимально выгодные для вас условия!</Typography>
                </CardContent>
                </Card>
                </div>
                <div>
                <Card sx={{ width: "370px",height: "217px", border: "1px solid #EDEDF0",  marginTop: "1rem" }}>
                 <CardContent>
                  <Typography variant="h5" component="div">Как быстро мы выполняем заказы</Typography>
                  <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '10px', marginBottom: '10px'}}></div>
                  <Typography sx={{color: "#292929"}}>Стандартный срок выполнения заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что...</Typography>
                </CardContent>
                </Card>
                <Card sx={{ width: "370px", height: "284px", border: "1px solid #EDEDF0", marginTop: "1rem" }}>
                 <CardContent>
                  <Typography variant="h5" component="div">Что с доставкой?</Typography>
                  <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '10px', marginBottom: '10px'}}></div>
                  <Typography sx={{color: "#292929"}}>Мы доставляем ваши заказы по всей России: от Камчатки до Калининграда, бережно упаковывая каждую печеньку или набор. Мы всегда производим
                   для вас на 2-5% больше от заказанного количества, чтобы ничего не смогло омрачить результат нашей работы. Сроки доставки 2-7 дней с момента заказа.</Typography>
                </CardContent>
                </Card>
                </div>
                <div>
                <Card sx={{ width: "370px",height: "149px", border: "1px solid #EDEDF0",  marginTop: "1rem" }}>
                 <CardContent>
                  <Typography variant="h5" component="div">А за 2 дня?</Typography>
                  <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '10px', marginBottom: '10px'}}></div>
                  <Typography sx={{color: "#292929"}}>Текст про дополнительную стоимость при срочных заказах</Typography>
                </CardContent>
                </Card>
                <Card sx={{ width: "370px", height: "285px", border: "1px solid #EDEDF0", marginTop: "1rem" }}>
                 <CardContent>
                  <Typography variant="h5" component="div">Ещё вопрос</Typography>
                  <div style={{ width: "100%", height: "2px", backgroundColor: '#EDEDF0', marginTop: '10px', marginBottom: '10px'}}></div>
                  <Typography sx={{color: "#292929"}}>Как уже неоднократно упомянуто, сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины
                   в целом, однако конкретные выводы, разумеется, рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</Typography>
                </CardContent>
                </Card>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Corporate

