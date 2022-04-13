import java.util.Arrays;
import java.util.Scanner;

public class 한줄로서기 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] answer = new int[N];

        for (int i = 0; i < N; i++) {
            // 키가 i인 사람이 왼쪽에 나(i)보다 큰 사람의 수
            int left = sc.nextInt();
            for (int j = 0; j < N; j++) {
                // i보다 키 큰 사람의 자리를 남겨둬야한다.
                // 그러므로 i보다 키 큰 사람이 있어야 할 자리를 지나쳐서
                // 그 자리가 비어있다면 i의 자리이다.
                if (left == 0 && answer[j] == 0) {
                    answer[j] = i + 1;
                    break;
                } else if (answer[j] == 0) {
                    left--;
                }
            }
        }
        Arrays.stream(answer).forEach(a -> System.out.print(a + " "));
    }
}
