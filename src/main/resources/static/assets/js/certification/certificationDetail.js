let modal = document.querySelector('.detailModalBackground');
let projectDetailButton = document.querySelector('.projectDetailButton');
let profileImage = document.querySelectorAll('.detailProfileImage');
let profileModal = document.querySelector(".profileModal");
let detailContentLikeButton = document.querySelector(".detailContentLikeButton");
let detailContentLikeCancel = document.querySelector(".detailContentLikeCancel");
let commentInputArea = document.querySelector(".detailContentFooterCommentInputArea");
let commentButton = document.querySelector(".commentButton");

//textarea 내용이 없을 경우 게시 버튼 비활성화
commentInputArea.addEventListener("input", function (e) {
    if (commentInputArea.value == '') {
        commentButton.disabled = true;
    } else {
        commentButton.disabled = false;
    }
})

//프로젝트 모달 창 켜는 버튼
function projectDetailModalShow() {
    modal.style.display = 'block';
    projectDetailButton.style.display = 'none';
    pageNum = 1;
    showList(pageNum);
    // 좋아요 총 갯수
    reviewDetailService.getLikeTotal(1,function (result) {
        $("#likeCount").html(result);
    })
}

//프로젝트 모달 창 숨기는 버튼,
//이미지 슬라이드와 버튼의 active 클래스를 다시 초기화해줌
function projectDetailModalHide() {
    modal.style.display = 'none';
    projectDetailButton.style.display = 'block';

    $('.innerImageWrapper ul li:first-child').addClass('active');
    $('.innerImageWrapper ul li:first-child').siblings('.active').removeClass('active');
    $('.innerImageWrapper div div:first-child').addClass("active");
    $('.innerImageWrapper div div:first-child').siblings('.active').removeClass('active');
}

//좋아요 버튼 누를 시의 이벤트
//하트 이미지 바꿔주기
detailContentLikeButton.addEventListener("click", function (e) {
    detailContentLikeButton.style.display = 'none';
    detailContentLikeCancel.style.display = 'block';
});

detailContentLikeCancel.addEventListener("click", function (e) {
    detailContentLikeButton.style.display = 'block';
    detailContentLikeCancel.style.display = 'none';
});


//프로필 이미지에 마우스 버튼 올릴 때
//작은 추가 프로필 정보 모달창 1초 뒤에 생성
//마우스를 떼면 사라짐

console.log(profileModal);
profileImage.forEach(function (item) {
    item.addEventListener("mouseover", function (e) {
        setTimeoutConst = setTimeout(function () {
            profileModal.style.display = 'block';
            profileModal.style.top = e.clientY - 5 + "px";
            profileModal.style.left = e.clientX - 5 + "px";
        }, 1000)
    }, function () {
        clearTimeout(setTimeoutConst);
    });

    item.addEventListener("mouseout", function (e) {
        clearTimeout(setTimeoutConst);
        profileModal.style.display = 'none';
    });

});

//버튼형 슬라이더
//이미지 아래 버튼 클릭했을 때 해당하는 이미지로 넘겨주는 기능
$('.innerImageWrapper > .innerImagePageButtons > div').click(function () {
    let $this = $(this);
    let index = $this.index();
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');

    let $slider = $this.parent().parent();
    let $current = $slider.find('> .innerImageSlides > li.active');
    let $post = $slider.find('> .innerImageSlides > li').eq(index);

    $current.removeClass('active');
    $post.addClass('active');
});

//좌/우 슬라이더
//이미지 양 옆 버튼 클릭했을 때 다음/이전 이미지로 넘겨주는 기능
$('.innerImageWrapper > .innerImageSideButtons > div').click(function () {
    let $this = $(this);
    let $slider = $this.closest('.innerImageWrapper');
    let index = $this.index();
    let isLeft = index == 0;
    let $current = $slider.find(' > .innerImagePageButtons > div.active');
    let $post;

    if (isLeft) {
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    };

    if ($post.length == 0) {
        if (isLeft) {
            $post = $slider.find(' > .innerImagePageButtons > div:last-child');
        }
        else {
            $post = $slider.find(' > .innerImagePageButtons > div:first-child');
        }
    };

    $post.click();
<<<<<<< HEAD
});
=======
});

//################################ AJAX 실행 영역 #############################################


>>>>>>> 964678f7f59d499d7898a5c43e7f72704ba32956
