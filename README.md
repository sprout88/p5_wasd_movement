# p5_wasd_movement
대각선이동을 제한하고, 부드럽게 움직이는 boolean 방식을 도입한 움직임 스크립트입니다.
# 기존 방식이 끊기고 부드럽지 않은 이유

document.onkeydown = function (event) {
        if (event.keyCode === 39) //arrow_right
            x+=speed;
        else if (event.keyCode === 40)  //awwow_down
            y+=speed;
        else if (event.keyCode === 37) //arrow_left
            x-=speed;
        else if (event.keyCode === 38) //arrow_up
            y-=speed;
    }
    
이 방식을 이용하면 뭔가 부자연스럽고 끊긴다.
이유는 브라우저 객체가 키보드 입력을 감지하는 속도 자체에 문제가 있기때문이다.
크롬 등의 브라우저는 "키보드가 처음 눌림"을 감지하는 속도는 빠르지만, "꾹 눌려있음(onkeyDown)"을 감지하기 위해, 바로 전의 눌림과 이후 눌림 사이의 시간을 잰다.
따라서 느려진다.
따라서 컨트롤러에 좌표계산을 할당하면 안된다

그래서 처음 키보드가 눌리면, 움직임 boolean을 true로 바꾸고, 키보드버튼이 올라가면(onkeyup) 움직임 boolean을 false로 바꾸는 것을 컨트롤러로 하고,
움직임 boolean들에 의해 좌표가 계산되는 setInterval 함수를 만든다.

즉,
기존 방식 : 컨트롤러->좌표이동 // 좌표 렌더링
이였다면,

개선된 방식 : 컨트롤러->이동boolean // 이동boolean으로 좌표를 무한반복으로 연산 // 좌표 렌더링
으로 수정한 방식이다.

또한 이 방법을 이용하면, 두개의 키가 동시에 입력되었을때 "대각선 방향으로 1.5배 더 빠르게 이동하는 현상" 을 방지할수있다.
애초에 대각선 이동이 불가능하다.

대각선 이동을 가능하게 하려면, 두개의 boolean이 동시에 참일때의 분기문을 작성하면 된다.
