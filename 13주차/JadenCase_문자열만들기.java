public class JadenCase_문자열만들기 {

    public String solution(String s) {
        char[] arr = s.toCharArray();
        int size = arr.length;
        for (int i = 0; i < size; i++) {
            char ch = arr[i];
            if (Character.isAlphabetic(ch)) {
                if (i == 0 || arr[i - 1] == ' ') {
                    arr[i] = Character.toUpperCase(ch);
                } else {
                    arr[i] = Character.toLowerCase(ch);
                }
            }
        }
        return String.valueOf(arr);
    }

    public static void main(String[] args) {
        String solution = new JadenCase_문자열만들기().solution("3people unFollowed me");
        System.out.println(solution);
    }
}
