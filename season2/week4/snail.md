- 첫번째 고민한 로직

방향을 고려하여 구현하는것이 까다로울것이라고 예상하여 다른 방법을 고민하였다.

![image](https://user-images.githubusercontent.com/58525009/152343864-25cc29db-f9d4-4710-89c3-68ea85d21cb0.png)

- 두번째 고민한 로직

수학적인 공식을 이용하는 로직을 생각하였다. 하지만 이렇게 짜는 경우 인덱스가 낮은것에서 높은순으로 순회하다가 다시 낮은순으로 순회하여야한다. 이러한 과정이 구현할때에 헷갈리고 복잡할 수 있다고 생각하였다.

![image](https://user-images.githubusercontent.com/58525009/152344394-b3382396-5f81-45df-957f-4fa4ba62fde8.png)

![image](https://user-images.githubusercontent.com/58525009/152344004-26915d07-bb9f-4bfd-a7dd-16a1fca036c3.png)

![image](https://user-images.githubusercontent.com/58525009/152344058-d0888552-3b82-4920-bb7f-8a01a43c2393.png)

- 세번째 고민한 로직

러시아 인형처럼 삼각형이 안에 계속 들어있다는 아이디어로 시작하였다.

안쪽 삼각형까지 1번만 고려하여 값을 저장하고 그 다음 2번, 3번 막대기를 순차적으로 처리하여 저장순서에 문제가 없도록 한다. 이렇게 하려면 1, 2, 3번 막대기의 시작 숫자를 수학 공식으로 구하는것을 고민하였다.

![image](https://user-images.githubusercontent.com/58525009/152345286-bd794047-76b4-4480-a2b3-dba5ec85c510.png)
