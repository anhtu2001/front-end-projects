post = [
    {
        id :1,
        //  ten tieu de
        name: 'Hua Hin',
        // tieu de anh
        img: 'https://static.asiawebdirect.com/m/bangkok/portals/huahin-bangkok-com/homepage/cha-am/venezia/allParagraphs/BucketComponent/ListingContainer/202/BucketList/03/image1/the-venezia-2.jpg',
        // noi dung bai viet chia thanh cac doan la cac ptu trong mang
        content: ['Cách thủ đô Bangkok khoảng ba giờ đi xe, Hua Hin là điểm đến yêu thích mới nhất của tín đồ du lịch. Không quá đông đúc hay sôi động, điều mà người ta thường nghĩ đến khi  nói về du lịch Thái Lan, Hua Hin là một thành phố khá “hiền lành”.','Này là bãi biển với cát trắng mịn, nắng vàng ấm áp và nước trong vắt! Này là nhà ga xe lửa với lối kiến trúc để lại từ thập niên 60 của thế kỷ trước. Tất cả làm nên một Hua Hin mỹ miều, mang theo phong vị xen lẫn hiện đại và cổ điển. Chắc chắn rằng bạn và “nửa kia” sẽ có được nhiều kỷ niệm đẹp cùng những bức ảnh đậm chất “nghệ” khi đến nơi đây.'],
        // cac hoat dong
        activities:[
            {
                name :'Đi chợ đêm Hua Hin',
                img :'https://divui.com/blog/wp-content/uploads/2016/12/chat-chai.jpg',
                des : 'Hua Hin là thiên đường mua sắm xinh đẹp ở Thái Lan. Ấn tượng ở các khu chợ ở Hua Hin là phong cách vintage, cổ kính và tinh tế. Cùng khám phá nét đẹp quyến rũ của 5 khu chợ đêm Hua Hin nổi tiếng sau đây!',
                sub_content :{ // nội dung như linh này: https://halotravel.vn/cho-dem-hua-hin/
                    //___________PHẢI TUÂN THỦ THEO MẪU DƯỚI:
                    // tieu de: ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Chợ Cicada':['Chợ Cicada là khu chợ đêm Hua Hin có không gian đẹp nhất. Với phong cách nghệ thuật độc đáo, khu chợ được chia làm 4 khu khác nhau. Chợ buôn bán các mặt hàng truyền thống là chính, bao gồm tranh vẽ, tượng và đồ điêu khắc, đồ trang trí nhà cửa,… Du khách tham quan chợ có thể thưởng thức các buổi biểu diễn âm nhạc miễn phí vào các ngày cuối tuần. Ở gần biển nên chợ Cicada cũng là địa điểm lý tưởng để các cặp đôi tảo bộ đầy lãng mạn.','https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-01.jpg', 'Cicada là khu chợ truyền thống ở Hua Hin'],
                    'Chợ Chatchai':['Chợ Chatchai nổi tiếng với những món ăn đường phố thơm ngon. Bạn sẽ chìm đắm vào hương vị và màu sắc đa dạng của các món ngon vỉa hè ở Thái Lan. Chợ đêm Hua Hin này còn là nơi bạn có thể thoả thích mua sắm từ trang sức, phụ kiện, đồ điêu khắc, cho tới quần áo, quà lưu niệm,…', 'https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-02.jpg', 'Chợ Chatchai là địa điểm được khách ngoại quốc yêu thích'],
                    'Chợ Plearnwan':['Chợ Plearnwan được mệnh danh là một bảo tàng sống. Bạn sẽ lạc bước vào không gian đời sống của người dân ở Hua Hin vào những năm 1950. Những tòa nhà 2 tầng cổ kính, những phim trường cũ kĩ và các nhà hát mang đậm dấu ấn thập niên 70. Bạn có thể tha hồ sống ảo ở khu chợ này đấy.','https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-03.jpg', 'Plearnwan có nhiều góc sống ảo cực chất'],
                    'Chợ Cha-Am':['Đây là khu chợ đêm Hua Hin được giới trẻ yêu thích bởi các dãy hàng hoá cực xinh. Những ngày cuối tuần chợ thường tấp nập nên bạn cần cẩn thận chú ý đồ dùng cá nhân mình mang theo nhé. Chợ Cha-Am không chỉ có nhiều món hàng độc đáo mà còn là lãnh địa của nhiều món ăn ngon và giá siêu rẻ.','https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-04.jpg', 'Cha Am với những gian hàng xinh xắn'],
                    'Chợ đêm Grand':['Chợ Grand là khu chợ lớn nhất ở thành phố này. Với không gian nghệ thuật rộng lớn và các mặt hàng đa dạng, chợ Hua Hin Grand là nơi mà du khách có thể tìm mua bất kỳ thứ gì ở Thái Lan. Ở đây còn có những quán bar sôi động, thích hợp cho các bạn trẻ tìm địa điểm vui chơi vào ban đêm.','https://halotravel.vn/wp-content/uploads/2019/05/thailan_cho-dem-hua-hin-05.jpg', 'Ẩm thực đường phố đặc sắc ở Hua Hin Grand'],
                }
            },
            {
                name :'Lặn biển khám phá Koh Talu',
                img :['https://www.tourthailan.net.vn/images/diadiem/diadiem-2/Koh-Talu-1.jpg'],
                des :['Khi du lịch đến Hua Hin, một trong những hoạt động bạn không nên bỏ lỡ là tham quan đảo Koh Talu và tham gia lặn biển ở đảo này. Hãy thử trải nghiệm một thiên đường ngay ở dưới hạ giới với cảnh sắc thiên nhiên từ trên cạn đến dưới nước ở Koh Talu. Nếu bạn đang ở thị trấn Bangsaphan, chỉ mất 30 phút đi thuyền, bạn đã đặt chân đến được Koh Talu.', 'Koh Talu có những bãi biển với hàng cọ rì rào và những rạn san hô đẹp tuyệt. Ngoài thế giới đại dương phong phú, sự yên tĩnh tuyệt đối của nơi đây cũng là điểm thu hút du khách khi đến đảo. Với sự riêng tư của nó, bạn sẽ trải nghiệm được nhiều điều thú vị bất ngờ. Thưởng thức bữa trưa ngay tại đảo sẽ cho bạn một cảm giác khác biệt chưa từng có khi ăn một bữa ăn trên một vùng đất yên tĩnh hiền hòa này.', 'Và, khi bạn đến Koh Talu, ngoài việc được tự do khám phá đảo và tham gia các hoạt động dưới nước, hãy dành thời gian cho việc lặn biển. Lặn biển ở Koh Talu là một hoạt động thú vị bạn đừng nên bỏ qua khi đến đây. Đây là một nơi lý tưởng cho việc lặn biển, bạn sẽ khám phá được thế giới đại dương bao la và đa dạng ở Koh Talu. Và với những ai mới tập tành với môn lặn biển này, hãy yên tâm bởi bạn sẽ được lặn ở những vùng nước cạn, ở đó, bạn cũng sẽ chiêm ngưỡng được hệ sinh thái đa dạng ở biển trong xanh này.'],
                sub_content :{},
            },
            
        ],
        type: ['ThaiLan'],
    },
    {
        id :2,
        name :'Làng Ihwa Mural',
        img :'https://thongtinhanquoc.com/wp-content/uploads/2019/08/tthq-lang-ihwa03.jpg',
        content :['Toạ lạc tại quận Hyehwa, Seoul, những bậc thang được điểm tô như một bức tranh hoa khổng lồ của làng Ihwa Mural là hình ảnh quá đỗi quen thuộc đối với “mọt” phim Hàn Quốc. Không chỉ sở hữu vẻ đẹp nên thơ, nhịp sống xung quanh làng Ihwa Mural còn tương tự như vừa bước ra từ phim điện ảnh.','Buổi sáng, bạn có thể thư thả đọc sách ở một quán café radio cũ kỹ, viếng thăm bảo tàng nghệ thuật hay dạo quanh công viên Naksan. Khi đêm về, cùng nhau ăn thịt nướng, topokki, bánh cá… ở các cửa hàng gần ga Hyehwa hay đắm chìm trong nhạc Jazz đều là những ý tưởng không tồi.'],
        activities :[
            {
                name :'Khám phá Seoul trong 1 ngày',
                img :'https://www.tugo.com.vn/wp-content/uploads/han-quoc-diem-den-yeu-thich-bac-nhat-cua-du-khach-trong-vai-nam-tro-lai-day.png',
                des :'Seoul – thành phố năng động, hiện đại bậc nhất thế giới với nhịp sống nhộn nhịp nhưng đâu đó vẫn lưu giữ vẹn nguyên những nét tinh túy của nền văn hóa truyền thống vô cùng đặc sắc. Cũng bởi nguyên do đó nên nhiều du khách đã lựa chọn Seoul làm điểm đến lý tưởng cho các hành trình khám phá của mình. ',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Tham quan Bảo tàng Nghệ thuật Seoul': ['Bảo tàng nghệ thuật Seoul là bảo tàng hiện đại nằm trong một tòa nhà rộng lớn có kiến trúc đẹp mắt. Trong khi các triển lãm đặc biệt tại đây có thể khá đông đúc và có thu phí, thì triển lãm thường trực lại hoàn toàn miễn phí và thường không được nhiều người chú ý tới. Tham quan bảo tàng, bạn còn được hiểu rõ hơn về cuộc đời và những thành tựu to lớn của nghệ sĩ  Chun Kyung-ja nổi tiếng đóng góp cho nền nghệ thuật của đất nước Hàn Quốc.','https://www.tugo.com.vn/wp-content/uploads/bao-tang-nghe-thuat-seoul.png','Bảo tàng Nghệ thuật Seoul'],
                     'Khám phá Công viên Văn hóa Tank Oil': ['Nếu bạn còn băn khoăn không biết đi du lịch Hàn Quốc cần bao nhiêu tiền hay muốn tiết kiệm chi phí cho chuyến đi sắp tới thì công viên văn hóa Tank Oil sẽ là lựa chọn không thể nào phù hợp hơn. Nơi đây thường xuyên tổ chức các buổi hòa nhạc, triển lãm, diễn thuyết hoàn toàn miễn phí. Ngoài ra, bạn cũng có thể lưu lại những bức ảnh “cực chất” bởi nơi đây còn sở hữu nhiều cung đường uốn lượn đẹp mắt vô cùng','https://www.tugo.com.vn/wp-content/uploads/cong-vien-van-hoa-tank-oil.png','Công viên Văn hóa Tank Oil'],
                     'Tản bộ qua làng Bukchon Hanok':['Hàng trăm ngôi nhà truyền thống của Hàn Quốc (Hanok) tạo nên một ngôi làng Bukchon Hanok, một khu phố phảng phất đậm nét văn hóa của triều đại thời xưa. Chắc chắn, đây sẽ là một nơi tham quan hấp dẫn dành cho bạn khi đi du lịch Hàn Quốc trong dịp hè này.','https://www.tugo.com.vn/wp-content/uploads/lang-bukchon-hanok.png','Làng Bukchon Hanok'],
                     'Chìm đắm trong thế giới sách tại Thư viện Văn học Cheongun':['Thư viện văn học Cheongun chắc chắn là một trong những bảo tàng đẹp nhất ở Hàn Quốc. Không chỉ có nhiều các loại sách bổ ích mà nơi đây còn có một không gian “xịn sò”, đẹp mắt, rộng rãi và thoáng mát để vừa đọc sách, vừa tận hưởng một không gian đầy yên bình.','https://www.tugo.com.vn/wp-content/uploads/thu-vien-van-hoc-cheongun.png','Thư viện Văn học Cheongun'],
                     'Tham quan Bảo tàng Quốc gia Hàn Quốc':['Hơn 15000 đồ tạo tác trải dài từ tiền sử đến hiện tại được trưng bày tại Bảo tàng Quốc gia Hàn Quốc sẽ giúp bạn có cái nhìn chân thực hơn về đời sống cũng như nền văn hóa đặc sắc chạy dài xuyên suốt từ xưa đến nay của nền văn hóa và con người tại đất nước Hàn Quốc.', 'https://www.tugo.com.vn/wp-content/uploads/bao-tang-quoc-gia-han-quoc.png', 'Bảo tàng Quốc gia Hàn Quốc'],
                },
            },
            {
                name: 'Seoul Sky ở Lotte World',
                img: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ae4biwajhwvfynznhngy/V%C3%A9%20V%C3%A0o%20C%E1%BB%ADa%20Seoul%20Sky%20%E1%BB%9E%20Th%C3%A1p%20Lotte%20World.jpg',
                des: 'Khám phá những điều độc đáo về Lotte World Tower ở xứ sở kim chi. Nếu Landmak 81 là tòa nhà cao nhất ở Việt Nam với 81 tầng thì Lotte World Tower cũng là tòa nhà cao nhất Hàn Quốc với 123 tầng. Tòa nhà này cũng được xem là một trong những biểu tượng của Hàn Quốc. Gần như tất cả khách du lịch Hàn Quốc đều không thể bỏ qua tòa tháp này.',
                sub_content:{
                    'Những điều đặc biệt của Lotte Tower ':['Công trình được lấy cảm hứng từ nét văn hóa truyền thống xen lẫn hiện đại của Hàn Quốc. Hình dáng của Lotte World Tower là sự hòa quyện hài hòa giữa chiếc bình gốm và chiếc bút lông thời xưa của đất nước Hàn Quốc. Đây là hai hiện vật làm nên chủ đề và thiết kế cho tòa nhà với đường cong đơn giản, mềm mại đại diện cho vẻ đẹp truyền thống lâu đời của Hàn Quốc. Phía đỉnh tháp có hình dáng hai đường chữ V soi ánh sáng hướng về sông Hàn, Tháp Namsan và khu trung tâm cổ của Seoul. Đây được xem là một ý tưởng rất đặc biệt và có một không hai của Lotte World Tower.', 'https://www.zila.com.vn/wp-content/uploads/2020/06/Lotte-Word-Tower-e1601342134222.jpg','Lotte Tower Hàn Quốc'],
                }
            }   
        ],
        type :['HanQuoc'],
    },
    {
        id :3,
        name :'Hồ Kawaguchi',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/ho-kawakuchi-nhat-ban.webp',
        content :['Không phải ngẫu nhiên mà nhiều du khách chọn hồ Kawaguchi để tỏ tình hay chụp ảnh cưới. Thuộc “Phú Sĩ Ngũ Hồ”, Kawaguchi làm say lòng khách phương xa bởi vẻ đẹp tựa “tiên cảnh nơi hạ giới”. Mặt hồ phẳng lặng, nước trong veo, nằm yên bình giữa rừng cây xanh bát ngát.  Xung quanh hồ đặt nhiều băng ghế đá; du khách có thể ngồi lại nghỉ chân, tán gẫu hay đơn giản là chiêm nghiệm vẻ đẹp hoàn hảo của thiên nhiên. Nếu may mắn đến hồ Kawaguchi vào ngày trời trong, bạn còn được nhìn thấy toàn cảnh núi Phú Sĩ vừa hùng dũng vừa thơ mộng.', 'Có rất nhiều khách sạn, resort, nhà hàng và quán café đẹp ở gần hồ Kawaguchi. Bạn có thể lưu lại đây vài ngày, để tham gia các hoạt động thú vị như đạp xe quanh hồ, trượt ván nước, ngắm hoa hoặc chèo thuyền.'],
        activities :[
            {
                name :'Vui chơi ở công viên Fuji Q',
                img :'https://image.thanhnien.vn/768/uploaded/ngocthanh/2019_07_15/image001_lmtz.jpg',
                des :'Công viên Fuji-Q Highland là một trong những công viên giải trí nổi tiếng nhất Nhật Bản. Nếu bạn là một người ưa thích sự mạo hiểm thì chắc chắn không thể bỏ qua địa điểm này.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Tàu lượn Fujiyama (130km/giờ)': ['Chuyến tàu được xem là Vua của tàu lượn siêu tốc và là tàu lượn siêu tốc cao nhất trong công viên. Trên thế giới, Fujiyama là chiếc tàu lượn cao thứ 8, dài thứ 5 và nhanh thứ 10.Tàu lượn cao gần 80 mét mang lại cho bạn một cái nhìn tuyệt đẹp về núi Phú Sĩ. Tàu lượn có tốc độ hơn 130km/giờ sẽ khiến những người thích cảm giác mạnh mê ly. Đây mới chính là điểm thu hút và thú vị của chiếc tàu lượn siêu tốc này.','https://image.thanhnien.vn/660/uploaded/ngocthanh/2019_07_15/image003_kime.jpg','Fujiyama - vua tàu lượn Nhật Bản'],
                     'Tàu lượn Dodonpa (đạt tốc độ 172 km/giờ trong vài giây)':['Chiếc tàu lượn này có khả năng tăng tốc cao nhất thế giới và lúc khởi động sẽ đưa bạn đi từ 0 đến 172 km/giờ chỉ trong vài giây. Dodonpa nổi tiếng với tốc độ khủng khiếp, độ cao hơn 50m. Bạn sẽ có cảm giác lên và rơi xuống nhanh như được phóng lên không trung.','https://image.thanhnien.vn/660/uploaded/ngocthanh/2019_07_15/image005_eznj.jpg','Trải nghiệm cảm giác rơi tự do từ độ cao hơn 50 mét cùng Dodonpa'],
                     'Tàu lượn Takabisha với đường trượt thẳng đứng':['Bạn có thể hơi bối rối khi lần đầu tiên nhìn thấy chiếc tàu lượn này. Đây là chiếc tàu mới nhất trong bốn chiếc tàu lượn siêu tốc ở Fuji-Q. được thiết kế với đường trượt thẳng đứng có góc 121 độ giúp cho du khách có cảm giác như đang bay trong không gian. Ngoài ra, nó còn có 7 vòng lặp và xoắn suốt quãng đường đi.','https://image.thanhnien.vn/660/uploaded/ngocthanh/2019_07_15/image007_aoyb.jpg','Takabisha thách thức mọi tín đồ đam mê cảm giác mạnh'],
                },
            },
            {
                name :'Thăm núi Phú Sĩ, hồ Suwa & Takayama',
                img :'https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/plxajvd3isp7xdniuapo.webp',
                des :'Di qua những khu trung tâm du lịch nhộn nhịp của Nhật và đến vài nơi yên bình nhất với chuyến đi 1 chiều này. Chuyến đi bạn được sắp xếp đến núi Fuji, hồ Suwa, đồi Shinshu, và Takayama trong 1 ngày. Với 2 chuyến đưa đón có ở Tokyo, chuyến đi này đảm bảo di chuyển nhanh chóng và dễ dàng đến nơi. Bắt đầu một ngày của bạn với chuyến đến trạm số 5 line Fuji Subaru, phát triển nhất trong tất cả 4 trạm Fuji thứ 5. Chuẩn bị máy ảnh cho cảnh đẹp ngoạn mục của 5 hồ Fuji đang chờ đón bạn. Kế tiếp, đến nhà hàng gần Fuji-Q Highland cho bữa trưa. Nhà hàng có thể phục vụ món chay, nên để chắc chắn cho thực đơn mong muốn của bạn hãy báo cho biết khi thanh toán nhé. Sau bữa ăn no nê, đến đài quan sát cho cảnh trên cao của hồ Suwa và đồi Shinshu. Mãn nhãn với chuyến dừng chân cuối cùng của bạn - Takayama, một thành phố được bao quanh bởi núi và cây xanh um tùm. Hòa mình vào văn hóa nơi này khi bạn đi dọc những con phố cổ, nơi kết thúc chuyến đi của bạn.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Mặt trời mọc':['Những người tham gia leo núi Phú Sĩ hẳn đều mong muốn được nhìn thấy cảnh mặt trời mọc từ đỉnh ngọn núi này. Cảnh những tia sáng mặt trời dần dần ló rạng sau những đám mây và bầu trời đêm quả là một khung cảnh tuyệt đẹp.','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/827/original/pixta_16625807_M_s.jpg?1556265232&d=750x750',''],
                     'Kim cương Phú Sĩ':['Thời điểm mặt trời mọc và lặn, mặt trời dường như đậu ngay trên đỉnh núi Phú Sĩ, nhìn từ xa trông giống như một viên kiêm cương đang tỏa sáng lấp lánh trên đỉnh núi, hiện tượng này được gọi là "Kim cương Phú Sĩ". Đối với người Nhật đây là một cảnh tượng vô cùng đắt giá, vì không phải lúc nào nó cũng xảy ra, nó phụ thuộc vào rất nhiều yếu tố như vị trí đứng của bạn là ở hướng đông hay hướng tây, phụ thuộc vào thời gian và điều kiện thời tiết lúc đó.','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/828/original/pixta_43070826_M_s.jpg?1556265254&d=750x750',''],
                     'Phú Sĩ đỏ':['Đúng như tên gọi, bạn sẽ nhìn thấy ngọn núi có màu đỏ do ánh nắng chiếu vào lúc hoàng hôn hoặc bình mình trong suốt mùa leo núi, khi mà ngọn núi không bị bao phủ bởi tuyết. Ngoài ra, vào mùa đông khi tuyết bao phủ ngọn núi, núi Phú Sĩ trông như có màu đỏ đậm','https://d20aeo683mqd6t.cloudfront.net/images/imgs/000/012/829/original/pixta_46835072_M_s.jpg?1556265269&d=750x750',''],
                },
            },
           
        ],
        type :['NhatBan'],
    },
    {

        id : 4,
        name :'Hồ Nhật Nguyệt',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/ho-nhat-nguyet-dai-loan.webp',
        content :['Hồ Nhật Nguyệt (hay Nhật Nguyệt Đàm) nằm ở trung tâm Đài Loan, bao quanh bởi các ngọn núi cao. Thời điểm đến Hồ Nhật Nguyệt đẹp nhất là vào mùa xuân và mùa thu, khi bạn không cần lo lắng về tình trạng quá tải du khách và thong thả chiêm ngưỡng thiên nhiên tuyệt mỹ nơi đây.','Được CNN Travel chọn là một trong những hành trình đẹp nhất thế giới, đường đạp xe quanh hồ Nhật Nguyệt mang đến cho du khách trải nghiệm mới lạ, với khung cảnh hoà hợp giữa núi rừng hùng vĩ và hồ nước trong xanh. Sau khi ngắm cảnh thoả thích, bạn có thể khám phá nét văn hoá độc đáo ở quền Wenwu, nông trường Thanh Cảnh hay làng văn hoá Cửu Tộc.'],
        activities :[
            {
                name :'Thăm thú hồ Meihua',
                img :'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/128def06-Meihua-Lake-Tour/Chuy%E1%BA%BFn%20du%20l%E1%BB%8Bch%20h%E1%BB%93%20Meihua.jpg',
                des :'Dành thời gian nhàn nhã thăm Hồ Meihua để tận hưởng quang cảnh tự nhiên tuyệt đẹp. Bạn sẽ được chào đón với cây cỏ tươi tốt và không khí trong lành, nơi bạn có thể dành thời gian đi bộ, đi xe đạp và đi du thuyền trên hồ. Điểm nổi bật khác là Đền Sanqing - nằm trên sườn phía nam của hồ Meihua, kiến trúc của ngôi đền giống như các tòa án kiểu triều đình truyền thống và rất đáng xem. Hoàn thành buổi chiều của bạn với một bữa tiệc trà ngon miệng tại quán cà phê Salex khi bạn ngắm nhìn những khung cảnh hồ tuyệt đẹp.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Hoạt động dã ngoại':['Bạn có thể thuê một chiếc xe đạp điện cho bốn người để đi vòng quanh hồ và dừng lại ở nhiều điểm','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/7b4311f2-Meihua-Lake-Tour/Chuy%E1%BA%BFndul%E1%BB%8Bchh%E1%BB%93Meihua.webp','Đạp xe, đi bộ và đi thuyền trong chuyến đi nửa ngày'],
                    'Đền Sanqing':['Tham quan các thắng cảnh địa phương và ngất ngây trước kiến trúc của Đền Sanqing','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/b9fbfca1-Meihua-Lake-Tour/Chuy%E1%BA%BFndul%E1%BB%8Bchh%E1%BB%93Meihua.webp','Đền Sanqing'],
                },
            },
            {
                name :'Ngắm khinh khí cầu ở Đài Đông',
                img :'https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/fbd6ba4e-Taitung-Hot-Air-Balloon-Tour---Klook.webp',
                des :'Bay cao trên khinh khí cầu trải nghiệm không giống bất cứ ai. Tận hưởng khung cảnh tuyệt vời của những dòng sông và khe thung lũng xung quanh Đài Đông, tận hưởng nét đẹp của thiên nhiên qua nhiều góc nhìn khác nhau khi đứng giữa không. Khi bạn lướt nhẹ trên bầu trời và bay xuyên qua những đám mây tự hỏi khung cảnh xung quanh bên dưới bạn thế nào. Sau đó, đáp xuống và uống mừng với ly sâm banh, và nhận chứng nhận cho chuyến đi đáng nhớ cũng như trải nghiệm tuyệt vời đã đến với bạn.',
                sub_content:{
                    // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Tận hưởng vẻ đẹp ngoài sức tưởng tượng của Đài Đông ở trên cao':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/25e79443-Taitung-Hot-Air-Balloon-Tour---Klook/TourKhinhKh%C3%ADC%E1%BA%A7u%C4%90%C3%A0i%C4%90%C3%B4ng(Taitung).webp',''],
                    'Đi qua các thung lũng, núi đồi, và sông từ trên cao trong những đám mây':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/af848b30-Taitung-Hot-Air-Balloon-Tour---Klook/TourKhinhKh%C3%ADC%E1%BA%A7u%C4%90%C3%A0i%C4%90%C3%B4ng(Taitung).webp',''],
               },
            },    
        ],
        type :['DaiLoan'],
    },
    {
        id :5,
        name :'Galle',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/du-lich-galle-sri-lanka.webp',
        content :['Sở hữu hình dáng như “giọt nước mắt” giữa lòng Ấn Độ Dương, quốc đảo Sri Lanka là điểm đến không thể bỏ qua đối với người thích khám phá nền văn hoá mới. Galle, thành phố ven biển phía Nam Sri Lanka, thường được tín đồ du lịch ví như một hòn ngọc thô hoàn hảo. Từ những cảng biển cũ kỹ đến nhà thờ, bảo tàng hoặc pháo đài được xây dựng theo kiến trúc Hà Lan, không khó để nhận ra một Galle cổ kính mà cũng rất kiêu kỳ.'],
        activities :[
            {
                name :'Tour Câu Cá Truyền Thống Ở Galle',
                img :'https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ezsewmi5oprxih3kbjgi.webp',
                des :'Khi ở Galle, việc xem và học hỏi cách người dân sống hàng ngày luôn là 1 trải nghiệm tuyệt vời. Với hoạt động này, du khách sẽ có thể đóng vai 1 ngư dân người Galle và đến Đầm phá Hikkaudwa để thử bắt cá theo cách truyền thống! Bắt đầu với chuyến xe đón khách tiện lợi ở khách sạn, hướng dẫn viên sẽ đưa bạn đến đầm phá nơi bạn sẽ được cung cấp mọi dụng cụ cần thiết trước khi đi bắt cá trên thuyền chèo, theo đúng cách của người dân địa phương. Học hỏi từ hướng dẫn viên cũng như ngư dân cách để câu tốt nhất. Đây là 1 trải nghiệm thú vị kéo dài 2 giờ, độc đáo không như những chuyến đi hay hoạt động khác bạn có thể thấy ở Galle. Sau khi câu cá, bạn sẽ được đưa đến khách sạn địa phương để tận hưởng bữa trưa đầy ắp và ngon miệng. Hoạt động sẽ kết thúc và bạn sẽ được đưa về khách sạn ở Galle, với những kỉ niệm mới để chia sẻ với người thân khi về nhà.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Đến Đầm phá Hikkaduwa để bắt đầu chuyến bắt cá buổi sáng cùng hướng dẫn viên':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1024,h_768,f_auto/w_63,x_11,y_11,g_south_west,l_klook_water/activities/ubf1jatkyt7tiofsaivx/TourC%C3%A2uC%C3%A1Truy%E1%BB%81nTh%E1%BB%91ng%E1%BB%9EGalle.webp',''],
                     'Quan sát ngư dân địa phương về cách họ tìm cá để bắt':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_858,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/dksymv6idww5nw9t2ynw/TourC%C3%A2uC%C3%A1Truy%E1%BB%81nTh%E1%BB%91ng%E1%BB%9EGalle.webp',''],
                     'Học những mẹo để bắt cá trong khu vực và có thể bạn sẽ bắt được 1 chú cá to như thế này':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_858,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ndtaymwfgkj4yktdkwxq/TourC%C3%A2uC%C3%A1Truy%E1%BB%81nTh%E1%BB%91ng%E1%BB%9EGalle.webp',''],
                },
            },
        ],
        type :['SriLanka'],
    },
    {

        id :6,
        name :'Yamagata',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/du-lich-Yamagata-nhat-ban.webp',
        content :['Yamagata nằm ở Tohoku, được mệnh danh là vùng đất của suối nước nóng (Osen) và hoa anh đào. Có lẽ chỉ cần nghe đến biệt danh này, bạn cũng phần nào mường tượng được vẻ đẹp duy mỹ và thanh bình nơi đây. Đặc sản của Yamagata, bên cạnh hoa hồng, tỳ linh và cá hồi thì còn có những ngôi nhà gỗ nằm san sát nhau, mang theo sắc màu đặc trưng của một Nhật Bản cổ xưa.'],
        activities :[
            {
                name :'Sagano – Chuyến tàu lãng mạn',
                img :'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/3916ca4c-/Chuy%E1%BA%BFnT%C3%A0uSaganoL%C3%A3ngM%E1%BA%A1n(Nh%E1%BA%ADnv%C3%A9%E1%BB%9FTrungT%C3%A2mOsaka).webp',
                des :'Nhận trước vé tàu Sagano của bạn 1 cách tiện lợi ở trung tâm Osaka và chuẩn bị lên chuyến tàu lãng mạn ở gần Kyoto này từ Ga Kameoka. Vé của bạn sẽ có giá trị cho chuyến đi một chiều từ ga Kameoka đến ga Saga, (bạn cũng có thể đặt chuyến về riêng) đây là một trong những tuyến đường đẹp nhất ở Nhật Bản. Trong chuyến đi 25 phút này, bạn sẽ thấy một thiên đường phủ đầy tuyết vào mùa đông, cảnh vật bị che khuất bởi những cây phong màu đỏ thẫm vào mùa thu, quang cảnh xanh mướt mượt vào mùa hè, và tất nhiên, hoa anh đào nở rộ vào mùa xuân.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Công viên Nara':['nơi đây sở hữu và bảo tồn một quần thể kiến trúc cổ độc đáo được UNESCO công nhận di sản Thế Giới: Công viên Nara – với đàn hươu sao hơn 1000 con đi tự do trong công viên (theo Thần Đạo của Nhật Bản thì hươu được xem là sứ giả của thần linh).','https://dulichnhatban.net/static/uploads/images/tynimce/2018/06/20/Saigontourist_Nhat-Ban_Cong-vien-Nara1.jpg', 'chu hou vang ngo ngac'],
                     'Chùa Todaiji (Đông Đại Tự)':['đây là ngôi chùa bằng gỗ lớn nhất Thế Giới, bên trong chùa có pho Đại tượng phật khổng lồ có tên gọi Daibustu cao đến 14,98m và nặng hơn 550 tấn.Quý khách dùng bữa trưa.','https://dulichnhatban.net/static/uploads/images/tynimce/2018/06/20/pixta_19300561_M.jpg',''],
                     'Thành Osaka':['một trong những thành quách nổi tiếng nhất Nhật Bản, là biểu tượng và niềm tự hào của người dân Osaka, vào mùa thu quý khách có thể trải nghiệm sự kết hợp giữa lá đỏ cùng hàng cây bạch quả.','https://dulichnhatban.net/static/uploads/images/tynimce/2018/06/20/lau-dai-oska3.jpg',''],
                     
                },
            },
            {
                name :'Tắm suối nước nóng tại Hokkaido',
                img :'https://rlx.jp/relux/img/hotelpictures/RP25766_1042.jpg?1574826965',
                des :'Sau sự vội vã và nhộn nhịp xung quanh thị trấn, còn cách nào tốt hơn để thư giãn hơn là một chuyến đi trong ngày đến một spa và onsen nghỉ dưỡng tự nhiên sang trọng? Bạn sẽ khởi hành từ Ga Sapporo để đến khu nghỉ dưỡng nổi tiếng Jozankei Tsuruga Resort Mori No Uta. Tên gọi của nó, có nghĩa là Bài Thơ Của Khu Rừng, thật hoàn hảo với vị trí tuyệt đẹp nằm trong khu rừng Hokkaido tươi tốt. Khu nghỉ mát spa có các tiện nghi hàng đầu, từ các phòng mát-xa đến phòng xông hơi khô, ăn buffet và thậm chí cả nhà hàng. Nhưng đặc điểm nổi tiếng nhất của khu nghỉ mát spa này là onsen nổi tiếng hoặc suối nước nóng. Onsen truyền thống Nhật Bản ngoài trời được bao quanh bởi những khu rừng rậm rạp của Hokkaido. Đắm chìm trong làn nước nóng tự nhiên của nó và tận hưởng bầu không khí trẻ trung của thiên nhiên và cảm thấy căng thẳng của bạn cứ trôi tuột đi. Sau khi bạn đã tận hưởng cơ sở vật chất của spa, hãy gặp gỡ các thành viên còn lại của nhóm tại trạm xe buýt và trở về Sapporo một cách an toàn và sẵn sàng cho một ngày du lịch khác.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                     'Tận hưởng trải nghiệm onsen độc đáo tại khu nghỉ mát Jozankei Tsuruga Resort Spa nổi tiếng':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/exegdlb0yzfqjmbvsgzx/TourT%E1%BA%AFmSu%E1%BB%91iN%C6%B0%E1%BB%9BcN%C3%B3ng%E1%BB%9FHokkaidoJozankeiResortSpaMoriNoUta.webp',''],
                     'Thư giãn tại các tiện nghi spa cao cấp trong phạm vi resort':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/x0hvgb4hgo61lj7yapit/TourT%E1%BA%AFmSu%E1%BB%91iN%C6%B0%E1%BB%9BcN%C3%B3ng%E1%BB%9FHokkaidoJozankeiResortSpaMoriNoUta.webp',''],
                     'Ngâm mình trong suối nước nóng thiên nhiên và tận hưởng bầu không khí của rừng Hokkaido':['','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/xomicpw59dfayztydjwd/TourT%E1%BA%AFmSu%E1%BB%91iN%C6%B0%E1%BB%9BcN%C3%B3ng%E1%BB%9FHokkaidoJozankeiResortSpaMoriNoUta.webp',''],
                },
            },
        ],
        type :['NhatBan'],
    },
    {
        id :7,
        name :'Koh Larn',
        img :'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive,q_85/c_fill,w_680/fl_lossy.progressive/q_auto/f_auto/blogvn/2019/08/du-lich-Koh-Larn-Thai-Lan.webp',
        content :['Nếu không thích Pattaya ồn ào, bạn có thể đi tàu khoảng 30 phút để đến Koh Larn – một hòn đảo riêng tư và yên tĩnh. Đảo san hô đặc biệt vắng khách du lịch vào các ngày giữa tuần; bạn có thể tận hưởng trọn vẹn thiên nhiên bình dị và tham gia nhiều hoạt động vui chơi hứng khởi như lặn biển, đi bộ dưới biển, dù lượn, mô tô nước hoặc đi thuyền chuối. Đừng quên mang theo một chiếc camera du lịch có khả năng chống nước để lưu lại những hình ảnh sống động dưới đại dương nghe!'],
        activities :[
            {
                name :'Tận hưởng thể thao mạo hiểm',
                img :'https://dulichcatvang.com/wp-content/uploads/2017/05/den-Pattaya-Thai-Lan-kham-pha-thien-duong-dao-san-ho-koh-larn-ivivu-13.jpg',
                des :'',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc
                    'Thám hiểm Pattaya với xe ATV':['Hãy xuống đường, để lại sự hối hả và nhộn nhịp đằng sau và khám phá vùng nông thôn Thái Lan nguyên sơ cách chưa đến nửa giờ đi từ thành phố bận rộn. Nhảy lên xe ATV và lái dọc theo tuyến đường mòn. Tận hưởng ánh nắng mặt trời hoặc lưới qua bùn - chuyến phiêu lưu trên ATV thú vị trong bất kỳ thời tiết nào và chỉ khiến bạn muốn đi thêm. Chưa bao giờ lái ATV? Đừng lo - sẽ không cần kinh nghiệm gì cả đâu, rồi bạn sẽ trở thành 1 tay lái xe ATV nhập Mỹ hàng đầu. Chiếc xe rất dễ để điều khiển và bạn có thể lái nó ngay lập tức. Vậy nên, hãy đạp ga và bắt đầu cuộc vui nào','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/6082fdae-Pattaya-ATV-Adventure-ATV-/Th%C3%A1mHi%E1%BB%83mPattayaV%E1%BB%9BiXeATV.webp','Khám phá Pattaya trên chuyến đi vui vẻ bằng ATV'],
                    'Vé Nhảy Dù Đôi của Thai Sky Adventures':['Nếu nhảy dù luôn nằm trong danh sách bạn muốn thực hiện, hãy biến giấc mơ này thành hiện thực trong chuyến du lịch sắp tới ở Thái Lan. Hãy tham gia hành trình đầy phấn khích này của Thai Sky Adventures và có được đầy đủ những gì cần thiết cho một trải nghiệm nhảy dù an toàn khó quên. Bạn sẽ được hướng dẫn bởi một trong những chuyên gia huấn luyện và còn được hỗ trợ lên máy bay để thực hiện cú nhảy! Nhớ mở mắt để ngắm nhìn khung cảnh tuyệt vời của Pattaya và Vịnh Thái Lan khi bạn rơi tự do với tốc độ 220km/h nhé! Nếu bạn muốn lưu giữ lại trọn vẹn trải nghiệm này, bạn có thể chọn lưu giữ bằng hình ảnh và video. Có cả xe đưa đón khứ hồi để bạn có một chuyến phiêu lưu kích thích trọn vẹn khi ở Thái Lan!','https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_971,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/uayat3e8jdf6dal2ivae/V%C3%A9Nh%E1%BA%A3yD%C3%B9%C4%90%C3%B4ic%E1%BB%A7aThaiSkyAdventures.webp','Hãy làm cho giấc mơ nhảy dù thành hiện thực trong chuyến du lịch sắp đến của bạn ở Thái Lan!'],
                    'Human Slingshot Và Nhảy Bungy Tại Công Viên Sanook Pattaya':['Những người tìm kiếm cảm giác mạnh và những người đam mê mạo hiểm sẽ không muốn bỏ lỡ cơ hội thử sức với câu lạc bộ Human Slingshot và nhảy Bungy sôi động tại Sanook Park, Pattaya! Kể từ năm 1989, Sanook Park đã đáp ứng nhu cầu của những người thích phiêu lưu mạo hiểm với cú nhảy bungy cao 60m của mình không chỉ mang đến cho bạn cảm giác chóng mặt rơi tự do mà còn có tầm nhìn tuyệt vời ra hồ ngay bên dưới. Nếu đó là không đủ cho bạn, bạn cũng có thể thử ná bắn đạn người, một máy phóng đưa bạn lên trên 90m cao ở tốc độ 150km/s dựng tóc gáy! Nếu bạn vẫn còn lo lắng về việc có nên thử những chuyến đi bất chấp hiểm nguy, không cần phải lo lắng! Hướng dẫn viên nói tiếng Anh chuyên nghiệp của bạn sẽ ở đó để hướng dẫn bạn về các biện pháp an toàn cơ bản và cổ vũ bạn nếu bạn cần tăng thêm tinh thần. Cho dù đó là nhảy bungy, ná bắn đạn người, hoặc cả hai, bạn chắc chắn sẽ có khoảng thời gian tuyệt nhất trước giờ của cuộc sống của bạn. Thêm vào đó, bạn thậm chí có thể mang về nhà một video HD của bạn để cho tất cả mọi người trở về nhà và làm cho họ muốn họ đã có ở đấy để trải nghiệm nó!','https://res.klook.com/image/upload/c_fill,w_960,h_460,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/mimxg0abrlurmkt5kxmj.webp','Thử thách chính bản thân nhảy khỏi nền tảng cao 60m và lao xuống thế giới bên dưới!'],
                },
            },
            {
                name :'Vi vu chợ nổi',
                img :'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/04/chonoi-pattaya-bangkok-thailan-vntrip-e1523608277239.jpg',
                des :'Thái Lan sở hữu cho mình rất nhiều địa điểm hấp dẫn khách du lịch. Trong số đó, không thể không nhắc đến chợ nổi Pattaya, một khu chợ độc đáo của xứ Chùa Vàng. Những mặt hàng được bày bán ở đây rất đa dạng nhưng hấp dẫn nhất vẫn là những món ăn vặt đường phố hấp dẫn cùng những chiếc thuyền đầy ắp hoa quả tươi ngon luôn là những mặt hàng hấp dẫn khách du lịch.',
                sub_content:{
                     // 'tieu de': ['noi_dung','link_anh', 'phan_mo_ta_anh'] in ra theo thu tu nay la dc'
                    'Đôi nét về chợ nổi Pattaya':['Được đưa vào hoạt động năm 2008, khu chợ này có diện tích lên đến 100.000 mét vuông, và có tên gọi đầy đủ là chợ nổi Bốn Miền (Four Regions Floating Market). Nơi đây được quy hoạch và chia thành 4 khu vực riêng biệt, tượng trưng cho bốn miền của Thái Lan bao gồm Bắc, Trung, Nam và vùng Đông Bắc. Mỗi khu vực lại bán những vật dụng, hàng hóa, sản vật đặc trưng của từng vùng miền.','https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/04/cho-noi-vntrip-e1523607389307.jpg','Khu chợ nổi nổi tiếng của Thái Lan'],
                    'Chợ nổi Bốn Miền Pattaya ở đâu?':['Tọa tạc tại khu Sukhumvit Pattaya, chợ nổi Bốn Miền nằm cách ngã tư South Pattaya Road (Pattaya Tai) chừng 5 km về phía đường cao tốc. Để tới thăm quan khu chợ, bạn có thể di chuyển dễ dàng bằng nhiều phương tiện khác nhau như đi bus, đi xe ôm hoặc nếu kinh phí không hạn hẹp bạn có thể đi taxi là đơn giản và thuận tiện nhất. Khi tới Sukhumvit đi tiếp chừng 2 km nữa bạn sẽ qua Pattaya Underwater World, trên đường đến Sattahip. Từ trung tâm Pattaya đến địa điểm này bạn sẽ phải chi trả khoảng 200-300 baht cho việc di chuyển, giá tiền này sẽ phụ thuộc vào thời điểm và phương tiện bạn lựa chọn. Để vào chợ bạn sẽ phải mua vé, giá vé chợ nổi Pattaya là 200 baht (khoảng 70.000đ). Giá vé khá rẻ nhưng khu chợ này thường rất đông vào những ngày cuối tuần, bạn nên lưu ý điều này.','https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/04/cho-noi-4mien-Pattaya-vntrip-e1523607633392.jpg','Bạn nên thuê thuyền đi dạo trong khu chợ này'],
                    'Cách đi chợ nổi Pattaya':['Vì đặc thù được xây nổi trên nước nên đến với khu chợ này chắc hẳn sẽ không còn phương tiện nào thích hợp hơn một chiếc thuyền có người lái. Như vậy sẽ thuận tiện hơn rất nhiều cho việc thăm quan khám phá những điều lý thú xung quanh khu chợ. Nếu bạn đi cùng gia đình hoặc bạn bè với nhóm từ 4 đến 6 người thì giá thuê thuyền trong 30 phút khá rẻ. Ngoài ra, bạn hoàn toàn có thể đi bộ dọc theo các dãy nhà gỗ san sát. Qua mỗi khu, các gian nhà lại mang những nét kiến trúc đặc trưng của từng vùng, đem lại cho bạn cảm giác như đang băng qua những khu phố sầm uất trên khắp đất nước Thái Lan.','https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/04/thamquan-cho-noi-pattaya-vntrip-e1523607968353.jpg','Thuyền lớn trở từ 4-6 người có giá thuê khá rẻ'],
                },
            },
            
        ],
        type :['ThaiLan'],
    },
]