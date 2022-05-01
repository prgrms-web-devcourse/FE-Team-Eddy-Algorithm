import java.util.Arrays;
import java.util.stream.Collectors;

public class 최댓값과최솟값 {

    public String solution(String s) {
        String[] strings = s.split(" ");
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for (String str : strings) {
            if (!str.equals(" ")) {
                int i = Integer.parseInt(str);
                max = Math.max(i, max);
                min = Math.min(i, min);
            }
        }
        return min + " " + max;
    }

    public static void main(String[] args) {
        System.out.println(new 최댓값과최솟값().solution("1 2 3 4"));
    }
}
