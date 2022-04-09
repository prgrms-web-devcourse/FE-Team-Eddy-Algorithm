import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class 모음사전 {

    String[] arr = {"A", "E", "I", "O", "U"};
    List<String> dictionary = new ArrayList<>();

    public int solution(String word) {
        DFS("");
        return dictionary.indexOf(word);
    }

    public void DFS(String diction) {
        if (diction.length() > 5) {
            return;
        }
            dictionary.add(diction);
        for (int i = 0; i < 5; i++) {
            DFS(diction + arr[i]);
        }
    }

    public static void main(String[] args) {
        System.out.println(new 모음사전().solution("AAAAE"));
    }
}
