var database = require('../database/database.js')
var expect = require('chai').expect
var mongoose = require('mongoose')
var mocha= require('mocha')

// describe 表示测试单元， it  表示测试用例
mocha.describe('数据库相关测试', function () {
    //连接数据库
    mongoose.connect('mongodb://localhost:27017/infor')

    var db = mongoose.connection

    db.on('error', console.error.bind(console, 'connection error'))

    db.on('open', console.error.bind(console, 'connection succeed'))

   
    //插入news数据
    it('插入news数据', function(done) {

       
        for(var i=0;i<15;i++)
        {
            var news = new database.news();
             news.title= '下一步怎么干？13句话速览四中全会公报';
             news.img_url='/public/img/1572525656247879.jpg';
             news.content=`中国共产党第十九届中央委员会第四次全体会议，于2019年10月28日至31日在北京举行。全会审议通过了《中共中央关于坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化若干重大问题的决定》，强调“坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，是全党的一项重大战略任务”。

             这项重大战略任务如何推进？十九届四中全会提出，这些方面要“坚持和完善”：
             
             1.坚持和完善党的领导制度体系，提高党科学执政、民主执政、依法执政水平
             
             要建立不忘初心、牢记使命的制度，完善坚定维护党中央权威和集中统一领导的各项制度，健全党的全面领导制度，健全为人民执政、靠人民执政各项制度，健全提高党的执政能力和领导水平制度，完善全面从严治党制度。
             
             2.坚持和完善人民当家作主制度体系，发展社会主义民主政治
             
             要坚持和完善人民代表大会制度这一根本政治制度，坚持和完善中国共产党领导的多党合作和政治协商制度，巩固和发展最广泛的爱国统一战线，坚持和完善民族区域自治制度，健全充满活力的基层群众自治制度。
             
             3.坚持和完善中国特色社会主义法治体系，提高党依法治国、依法执政能力
             
             必须坚定不移走中国特色社会主义法治道路，全面推进依法治国，坚持依法治国、依法执政、依法行政共同推进，坚持法治国家、法治政府、法治社会一体建设。
             
             4.坚持和完善中国特色社会主义行政体制，构建职责明确、依法行政的政府治理体系
             
             必须坚持一切行政机关为人民服务、对人民负责、受人民监督，创新行政方式，提高行政效能，建设人民满意的服务型政府。
             
             5.坚持和完善社会主义基本经济制度，推动经济高质量发展
             
             必须坚持社会主义基本经济制度，充分发挥市场在资源配置中的决定性作用，更好发挥政府作用，全面贯彻新发展理念，坚持以供给侧结构性改革为主线，加快建设现代化经济体系。
             
             6.坚持和完善繁荣发展社会主义先进文化的制度，巩固全体人民团结奋斗的共同思想基础
             
             要坚持马克思主义在意识形态领域指导地位的根本制度，坚持以社会主义核心价值观引领文化建设制度，健全人民文化权益保障制度，完善坚持正确导向的舆论引导工作机制，建立健全把社会效益放在首位、社会效益和经济效益相统一的文化创作生产体制机制。
             
             7.坚持和完善统筹城乡的民生保障制度，满足人民日益增长的美好生活需要
             
             必须健全幼有所育、学有所教、劳有所得、病有所医、老有所养、住有所居、弱有所扶等方面国家基本公共服务制度体系，注重加强普惠性、基础性、兜底性民生建设，保障群众基本生活。
             
             要健全有利于更充分更高质量就业的促进机制，构建服务全民终身学习的教育体系，完善覆盖全民的社会保障体系，强化提高人民健康水平的制度保障。坚决打赢脱贫攻坚战，建立解决相对贫困的长效机制。
             
             8.坚持和完善共建共治共享的社会治理制度，保持社会稳定、维护国家安全
             
             必须加强和创新社会治理，完善党委领导、政府负责、民主协商、社会协同、公众参与、法治保障、科技支撑的社会治理体系，建设人人有责、人人尽责、人人享有的社会治理共同体，确保人民安居乐业、社会安定有序，建设更高水平的平安中国。
             
             9.坚持和完善生态文明制度体系，促进人与自然和谐共生
             
             要实行最严格的生态环境保护制度，全面建立资源高效利用制度，健全生态保护和修复制度，严明生态环境保护责任制度。
             
             10.坚持和完善党对人民军队的绝对领导制度，确保人民军队忠实履行新时代使命任务
             
             要坚持人民军队最高领导权和指挥权属于党中央，健全人民军队党的建设制度体系，把党对人民军队的绝对领导贯彻到军队建设各领域全过程。
             
             11.坚持和完善“一国两制”制度体系，推进祖国和平统一
             
             必须严格依照宪法和基本法对香港特别行政区、澳门特别行政区实行管治，维护香港、澳门长期繁荣稳定。建立健全特别行政区维护国家安全的法律制度和执行机制。要坚定推进祖国和平统一进程，完善促进两岸交流合作、深化两岸融合发展、保障台湾同胞福祉的制度安排和政策措施，团结广大台湾同胞共同反对“台独”、促进统一。
             
             12.坚持和完善独立自主的和平外交政策，推动构建人类命运共同体
             
             要健全党对外事工作领导体制机制，完善全方位外交布局，推进合作共赢的开放体系建设，积极参与全球治理体系改革和建设。
             
             13.坚持和完善党和国家监督体系，强化对权力运行的制约和监督
             
             必须健全党统一领导、全面覆盖、权威高效的监督体系，增强监督严肃性、协同性、有效性，形成决策科学、执行坚决、监督有力的权力运行机制，构建一体推进不敢腐、不能腐、不想腐体制机制，确保党和人民赋予的权力始终用来为人民谋幸福。
             
             除了以上内容，全会还强调，“各级党委和政府以及各级领导干部要切实强化制度意识，带头维护制度权威，做制度执行的表率，带动全党全社会自觉尊崇制度、严格执行制度、坚决维护制度”。
             
             （人民日报客户端 曹磊 左潇 整理）
             
             责任编辑：刘杰

             `;
             news.click=2;
             news.zhaiyao=`中国共产党第十九届中央委员会第四次全体会议，于2019年10月28日至31日在北京举行。全会审议通过了《中共中央关于坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化若干重大问题的决定》，强调“坚持和完善中国特色社会主义制度、推进国家治理体系和治理能力现代化，是全党的一项重大战略任务”。`;

             news.save(error=>{
               expect(error).to.be.equal(null)
               done()
                 
                 

             })
        }
          
        });


    it('插入category数据',function(done){
     
      for (let i =0;i<5;i++)
      {
         let category = new database.category()
         category.title='cate'+i

         category.save(err=>{
            done()
            console.log('插入category')
         })
      }
      
    });

    it('插入picture数据',function(done){
    for(let i =0;i<20;i++)
    {
        var picture= new database.picture();
        picture.title='京雄城际铁路雄安站站房开工建设 外观造型抢先看'+i;
        picture.img_url='/public/img/KWKR-hpevhcm7047491.jpg'
        picture.zaiyao='京雄城际铁路雄安站站房开工建设 外观造型抢先看'
        picture.click=i;
        picture.content=`　京雄城际铁路,北起京九铁路李营站,途经北京大兴区、北京新机场
        
        　　河北省霸州市至雄安新区
        
        　　线路全长92.4公里
        
        　　全线设黄村、新机场、固安东
        
        　　霸州北、雄安5座车站
        
        　　雄安站是其中规模最大的新建车站
        
        　　站场总规模为11台19线
        
        　　建设工期24个月
        
        　　预计2020年底投入使用　雄安站枢纽同时规划引入

        　　北京至雄安新区城际铁路
        
        　　北京至雄安新区至商丘高速铁路
        
        　　天津至保定铁路
        
        　　雄安新区至忻州铁路
        
        　　天津至雄安新区城际铁路等
        
        　　5条高铁和城际线路
        
        　　融入国家高速铁路网
        
        　　该车站建成投产后
        
        　　雄安新区可直达北京、天津
        
        　　石家庄等京津冀主要城市
        
        　　连接华中、华南、西北
        
        　　西南、东北等不同地区
        
        　　实现雄安新区
        
        　　与北京、天津半小时交通圈
        
        　　与石家庄1小时交通圈
        
        　　将进一步完善京津冀区域
        
        　　高速铁路网结构
        
        　　便利沿线群众出行
        
        　　对提高新区对全国的辐射能力
        
        　　促进京津冀协同发展
        
        　　均具有十分重要的意义`;

        picture.save(error=>{
            console.log('图片插入成功')
            done()
        })
         


    }
    });
   

   /* mocha.it('插入categoryToPicture数据', function (done) {


        database.category.find().limit(1).exec((error, result) => {
            let  id = result[0].id;
            
            database.picture.find().exec((error, result) => {

                result.forEach(item => {
                    let cateToPic = new database.categoryToPicture()
                    cateToPic.img_id = item.id;
                    cateToPic.cate_id = id;
                    cateToPic.save().then(function(){
                        console.log("success")
                        done();
                    })


                })


            })

        })
    });

    /*** 
    it('插入imgOther数据',function(don){
      database.picture.find().exec((err,result)=>{
        result.forEach(item=>{
            let imgOther= new database.imgOther()
            imgOther.id=item.id
            imgOther.img_url='/public/img/Ewgh-hphsupx7844281.jpg'
            imgOther.save(err=>{
                console.log("imgother插入成功")
               
            })

            imgOther.id=item.id
            imgOther.img_url='/public/img/4SNl-hpfyces9948413.jpg'
            imgOther.save(err=>{
                console.log("imgother插入成功")
              
            })

            imgOther.id=item.id
            imgOther.img_url='/public/img/W-3K-hpfyces9948411.jpg'
            imgOther.save(err=>{
                console.log("imgother插入成功")
                don()
            })


        })
      })
    });
    */
    mocha.it('插入goods', function () {})


});