



    let tagList = document.getElementById("tag-list");
    let blogContainer = document.getElementById("blog-container");
  
    
    let tagArray = [".net",".net core",".net core 2.0",".net framework",".net framework 4.0",".net remoting",".net ria services","ado.net","ado.net 2.0","ado.net data services","ado.net entity framework" ,"ado.net entity framework 4.0","algorithms","api","asp.net","asp.net 2.0","asp.net 4.0","asp.net 4.5","asp.net core" ,"asp.net web api","async","asynchronous programming","RUST"
    ]
    

    let createTag =()=>{
        tagList.innerHTML = ""
        tagArray.forEach(e=>{
            let li = document.createElement("li");
            li.classList.add("tagg");
            let a = document.createElement("a");
            a.innerText = e;
            li.appendChild(a);
            tagList.appendChild(li);         
    
        })
    
    }
    createTag();
       
    
    function BlogsConstructor (blogHead,blogTime,author,category,content){
        this.blogHead = blogHead;
        this.blogTime = blogTime;
        this.author = author;
        this.category = category;
        this.content = content;
    }
    
    let blog1 = new BlogsConstructor("Matematik ve Oyun Programlama - Missile Command - Final","29 mart 2022","Zaur Qurbanov","RUST","Hiçbir ödül veya karşılık beklemeden kendinizi iyi hissetmek adına en son ne yaptığınızı hatırlıyor musunuz? Bu öyle değişik bir iç motivasyon ki kendinizi bir amaca adayarak hareket etmenizi sağlıyor. Karşılaşılan engeller engel olmaktan çıkıyor ve anlamak istediğiniz şeyler haline geliyor. En azından ben birkaç haftadır böyle hissediyorum. Cevval bir oyun programcısı olmak ya da akademide bu alana dair dersler vermek gibi bir amacım yok ama çok güçlü bir iç motivasyonum var; öğrenmek…");
    
    let blog2 = new BlogsConstructor("Matematik ve Oyun Programlama - Missile Command - Bölüm 2","25 KASIM 2022"," BURAK-SELIM-SENYURT","RUST","Bir önceki programımızda Atari'nin efsane oyunlardan Missile Command'in arkasındaki matematik enstrümanları incelemeye başlamıştık. İkinci bölümde ise zeminin orta noktasına ve şehrin biraz yukarsına füze bataryamızı yerleştiriyoruz. Bu füze bataryası, oyuncu mouse imlecini ekranda hareket ettirdikçe oraya doğru dönecek bir çizgiden ibaret esasında. Oyuncu mouse imlecinin olduğu yerde sol tuşa tıklarsa da bataryanın namlu ucundan bu noktaya doğru sevimli ve mavi renkte minik bir dörtgen fırlıyor. Herhangi bir zamanda sahnede sadece üç tane mermi oluyor. Hatta füze bataryası 30 derecenin altına veya 150 derecenin üstüne hareket edemediği gibi ateş de edemiyor. Diğer yandan mermi, mouse ile tıklanan ilk noktaya vardığında sahneden kaldırılıyor. Mermiler belli bir hızda ama şehre inen füzelerden azıcık daha hızlı şekilde hareket ediyorlar.");
    
    let blog3 = new BlogsConstructor("Matematik ve Oyun Programlama - Missile Command - Bölüm 1","18 KASIM 2022"," BURAK-SELIM-SENYURT","RUST","Uzun bir süredir Rust programlama dili ile hobi amaçlı uğraşıyorum. Son birkaç aydırda Rust tarafında kullanılan oyun motorlarını kurcalamaktayım. Ancak birkaç haftadır amacım oyun programlamada kullanılan temel matematik enstrümanları öğrenmek. Bana göre bu alanda ilerleyebilmemin en iyi yolu bilinen oyunların birer klonunu yazmaya çalışmak. Onca vektör, açı, nokta çarpım problemini işledikten sonra ilk gözüme kestirdiğim zamanın efsane Atari oyunlarından olan Missile Command. Kaynaklara göre seksenli yılların en kült oyunlarından birisi olarak karşımıza çıkıyor. Oyunda ekranın üst kısmında rastgele açılarda ve sayıda füzenin üssümüze inişine şahit oluyoruz. Oyuncu üssün tam orta yerinde duran füze rampasında ateş ederek şehre inen füzeleri patlatmaya çalışıyor. Görüntü tamamen piksel hareketlerinden oluşmakta ve benim asıl ilgilendiğim oyunun arkasındaki olası matematik hesaplamalar.");
    let blog4 = new BlogsConstructor('Birisi Sana "Blazor Nedir?" Diye Sorarsa',"08 MAYIS 2021"," BURAK-SELIM-SENYURT","BLAZOR","Yeni bir on yılın arifesini çoktan geçtik ve bu on yıla girmeden önce Microsoft çok önemli geliştirmelerin altına imza attı. Açık kaynak dünyasına hızlı bir girişten sonra yıllardır devam eden Mono projesi daha da anlam kazandı. Artık elimizde Silverlight, Windows Phone, Web Forms, .Net Remoting gibi kavramlar yok. Bunların yerine yenileri ve daha fazlası geldi. Xamarin ile platform bağımsız oyunlar, mobil uygulamalar, macOS ve linux ayırt etmeksizin çalışan kodlar... Dahası da var. 2017'de başlatılan ve standart haline gelen WASM(Web Assembly), Microsoft cephesinin gözünden kaçmadı. 2018 yılında deneysel bir çalışma olarak başlayan Blazor yıllar içerisinde gelişti ve şu anda üzerine yatırım yapılması gereken(mesela on yıllık Asp.Net Web Forms tabanlı ürünlerinizi modernize etmek istiyorsanız) bir konu haline geldi. Ancak ortada önemli bir sorun var. Onu bir arkadaşına nasıl anlatırsın?")
    let blog5 = new BlogsConstructor("Asp.Net Core'a Nasıl Merhaba Deriz?","25 NISAN 2021"," BURAK-SELIM-SENYURT",".NET CORE","Yazılım geliştirme işine ciddi anlamda başladığım yeni milenyumun başlarında .Net Framework sahanın yükselen yıldızıydı. C# programlama dilinin gücü ve .Net Framework çatısının vadettikleri düşünülünce bu son derece doğaldı. Aradan geçen neredeyse 20 yıllık süre zarfında .Net Framework'te evrimleşti. Microsoft'un açık kaynak dünyasına girişi, cross-platform stratejileri, Linux gibi bir zamanların ciddi rakipleri ile el sıkışarak hamle yapması sonrasında da son beş yıllık zaman diliminde .Net Core hayatımıza girdi. Bu beraberinde Microsoft'un sıklıkla yaptığı üzere bazı kavram karmaşalarını da beraberinde getirdi. En nihayetinde tek ve birleşik bir .Net 5 ortamından bahsedilmeye başlandı... ");
    let blog6 = new BlogsConstructor("Tie Fighter Değil, Project Tye!","30 MART 2021","BURAK-SELIM-SENYURT",".NET CORE","Açık kaynak olarak yayınlanan Project Tye, Microsoft'un deneysel projelerinden birisi. En azından konuya çalıştığım tarih itibariyle böyleydi. Projenin iki temel amacı var; .Net tabanlı mikroservis çözümlerinin daha kolay geliştirilmesini sağlamak ve söz konusu çözümleri az zahmetle Kubernetes ortamına almak(Deployment) Buna göre birden fazla servisi tek komutla ayağa kaldırmak, Redis, RabbitMQ vb normalde Sidecar container olan bağımlılıkları kolayca yönetmek, kullanılacak servislerin kolayca keşfedilmesini sağlamak(Service Discovery), uygulamaların container olarak evrilmesi için gerekli hazırlıkları otomatikleştirmek, olabildiğince basit ve tekil bir Kubernetes konfigurasyon dosyası desteği vermek, projenin genel amaçları olarak düşünülebilir.");
    let blogs = [blog1,blog2,blog3,blog4,blog5,blog6];
    
     let tags = document.querySelectorAll(".tagg");
     tags.forEach(e=>{
        e.addEventListener("click",()=>{

           let selectTag = e.innerText;
           
           let search = blogs.filter(blog=> blog.category.toLowerCase() === selectTag.toLowerCase());
         let result = search.length>0 ? search : blogs;
         blogContainer.innerHTML = ""
         createBlog(result)
        })
     })

  
    
   function createBlog(result){
     return   (result.forEach(e=>{
            let {blogHead,blogTime,author,content,category}=e;
            let blog = document.createElement("div");
            blog.classList.add("blog");
        

            let blogInfo = document.createElement("div");
            blogInfo.classList.add("blog-info");
            let blogHeader = document.createElement("h1");
            blogHeader.classList.add("blog-header");
            blogHeader.innerText = blogHead
    
            let info = document.createElement("div");
            info.classList.add("info");
            
            let blogDate = document.createElement("a");
            blogDate.classList.add("date");
            blogDate.innerText = blogTime;
            let blogAuthor = document.createElement("a");
            blogAuthor.classList.add("author");
            blogAuthor.innerText = author;
            let blogTag = document.createElement("a");
            blogTag.classList.add("tag");
            blogTag.innerText = category;
            let blogContentDiv = document.createElement("div");
            blogContentDiv.classList.add("blog-content-wrapper");
            let blogContent = document.createElement("p");
            blogContent.classList.add("blog-content");
            blogContent.innerText = content
    
    
          blogContainer.appendChild(blog);
      blog.appendChild(blogInfo);
    blogInfo.appendChild(blogHeader);
    blogInfo.appendChild(info);
       info.appendChild(blogDate)
            info.appendChild(blogAuthor)
            info.appendChild(blogTag);
           blog.appendChild(blogContentDiv);
            blogContentDiv.appendChild(blogContent);
    
        }))
    }
    


    
    
        createBlog(blogs);
    
    
    







