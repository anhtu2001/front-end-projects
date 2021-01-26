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
        activies:[
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
                img :'https://www.tourthailan.net.vn/images/diadiem/diadiem-2/Koh-Talu-1.jpg',
                des :['Khi du lịch đến Hua Hin, một trong những hoạt động bạn không nên bỏ lỡ là tham quan đảo Koh Talu và tham gia lặn biển ở đảo này. Hãy thử trải nghiệm một thiên đường ngay ở dưới hạ giới với cảnh sắc thiên nhiên từ trên cạn đến dưới nước ở Koh Talu. Nếu bạn đang ở thị trấn Bangsaphan, chỉ mất 30 phút đi thuyền, bạn đã đặt chân đến được Koh Talu.', 'Koh Talu có những bãi biển với hàng cọ rì rào và những rạn san hô đẹp tuyệt. Ngoài thế giới đại dương phong phú, sự yên tĩnh tuyệt đối của nơi đây cũng là điểm thu hút du khách khi đến đảo. Với sự riêng tư của nó, bạn sẽ trải nghiệm được nhiều điều thú vị bất ngờ. Thưởng thức bữa trưa ngay tại đảo sẽ cho bạn một cảm giác khác biệt chưa từng có khi ăn một bữa ăn trên một vùng đất yên tĩnh hiền hòa này.', 'Và, khi bạn đến Koh Talu, ngoài việc được tự do khám phá đảo và tham gia các hoạt động dưới nước, hãy dành thời gian cho việc lặn biển. Lặn biển ở Koh Talu là một hoạt động thú vị bạn đừng nên bỏ qua khi đến đây. Đây là một nơi lý tưởng cho việc lặn biển, bạn sẽ khám phá được thế giới đại dương bao la và đa dạng ở Koh Talu. Và với những ai mới tập tành với môn lặn biển này, hãy yên tâm bởi bạn sẽ được lặn ở những vùng nước cạn, ở đó, bạn cũng sẽ chiêm ngưỡng được hệ sinh thái đa dạng ở biển trong xanh này.'],
                sub_content :{},
            },
            
        ],
        type: ['Thai lan'],
    },
    {
      
    },
]