import java.util.HashMap;
import java.util.Map;

public class 위장 {

    public int solution(String[][] clothes) {
        int answer = 1;
        Map<String, Integer> map = new HashMap<>();
        for (String[] c : clothes) {
            String kind = c[1];
            // 경우의 수 합법칙.
            // 종류 하나 당 이름이 다르니, Map에 갯수 추가
            map.put(kind, map.getOrDefault(kind, 0) + 1);
        }
        // 곱 법칙
        for (Integer value : map.values()) {
            // 이 종류를 안 입는 한 가지 경우가 더 있으니 + 1 을 해준다.
            answer *= value + 1;
        }

        // 모두 안 입는 경우를 제외해야하기 때문에 -1을 해준다.
        return answer - 1;
    }

    public static void main(String[] args) {
        String[][] clothes = {
                {"yellowhat", "headgear"},
                {"bluesunglasses", "eyewear"},
                {"green_turban", "headgear"}};
        System.out.println(new 위장().solution(clothes));
    }
}
