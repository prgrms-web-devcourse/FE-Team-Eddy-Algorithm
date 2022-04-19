import java.util.*;
import java.util.stream.Collectors;

public class 뉴스클러스터링 {

    public int solution(String str1, String str2) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        Map<String, Integer> mapA = makeHashTable(str1);
        Map<String, Integer> mapB = makeHashTable(str2);
        if (mapA.size() == 0 && mapB.size() == 0) return 65536;
        List<String> inter = new ArrayList<>();
        List<String> union = new LinkedList<>();
        // mapA에서 살펴보기
        for (Map.Entry<String, Integer> entry : mapA.entrySet()) {
            // A 집합 원소가 B에 포함이 된다면. 교집합이므로 두 수 중 작은 값을 교집합에 넣는다.
            if (mapB.containsKey(entry.getKey())) {
                int min = Math.min(entry.getValue(), mapB.get(entry.getKey()));
                for (int i = 0; i < min; i++) {
                    inter.add(entry.getKey());
                }
            }
            for (int i = 0; i < entry.getValue(); i++) {
                union.add(entry.getKey());
            }
        }
        // 교집합 만들기 완료!

        // 합집합 만들기
        // A, B 를 그냥 합치고 교집합 만큼 지워준다.
        for (Map.Entry<String, Integer> entry : mapB.entrySet()) {
            for (int i = 0; i < entry.getValue(); i++) {
                union.add(entry.getKey());
            }
        }

        for (String s : inter) {
            union.remove(s);
        }

        return (int) (inter.size() / (double) union.size() * 65536);
    }

    private List<String> makeSet(String str) {
        int length = str.length();
        List<String> list = new ArrayList<>();
        for (int i = 0; i < length; i++) {
            if (i + 1 == length) break;
            char a = str.charAt(i);
            char b = str.charAt(i + 1);
            if (!Character.isAlphabetic(a) || !Character.isAlphabetic(b)) {
                continue;
            }
            list.add(str.charAt(i) + "" + str.charAt(i + 1));
        }
        return list;
    }

    private Map<String, Integer> makeHashTable(String str) {
        List<String> list = makeSet(str);
        Map<String, Integer> map = new HashMap<>();
        for (String s : list) {
            map.put(s, map.getOrDefault(s, 0) + 1);
        }
        return map;
    }

    public static void main(String[] args) {
        String str1 = "FRANCE";
        String str2 = "french";
        뉴스클러스터링 solution = new 뉴스클러스터링();
        System.out.println(solution.solution(str1, str2));
        str1 = "handshake";
        str2 = "shake hands";
        System.out.println(solution.solution(str1, str2));
        str1 = "aa1+aa2";
        str2 = "AAAA12";
        System.out.println(solution.solution(str1, str2));
        str1 = " abc";
        str2 = "abbb";
        System.out.println(solution.solution(str1, str2));

    }
}
