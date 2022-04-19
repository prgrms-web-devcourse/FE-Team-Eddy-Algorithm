import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class 괄호회전하기 {

    static final String left = "([{";
    static final String right = ")]}";



    public int solution(String s) {
        int answer = 0;
        int length = s.length();
        for (int i = 0; i < length; i++) {
            String rotation = rotation(s, i);
            if (isCorrectBrackets(rotation)) answer++;
        }
        return answer;
    }

    private String rotation(String s, int cnt) {
        char[] chars = s.toCharArray();
        Queue<Character> queue = new LinkedList<>();
        for (char ch : chars) {
            queue.offer(ch);
        }
        for (int i = 0; i < cnt; i++) {
            queue.offer(queue.poll());
        }

        StringBuilder sb = new StringBuilder();
        while (!queue.isEmpty()) {
            sb.append(queue.poll());
        }
        return sb.toString();
    }

    private boolean isCorrectBrackets(String brackets) {
        Stack<Character> stack = new Stack<>();
        for (char bracket : brackets.toCharArray()) {
            if (left.contains(bracket + "")) {
                stack.push(bracket);
            } else {
                if (stack.isEmpty()) return false;
                if (bracket == ')') {
                    if (stack.peek() == '(') {
                        stack.pop();
                    }
                }
                if (bracket == ']') {
                    if (stack.peek() == '[') {
                        stack.pop();
                    }
                }
                if (bracket == '}') {
                    if (stack.peek() == '{') {
                        stack.pop();
                    }
                }
            }
        }
        return stack.size() == 0;
    }


    public static void main(String[] args) {
        String s = "[](){}";
        괄호회전하기 solution = new 괄호회전하기();
        System.out.println(solution.solution(s));
    }
}
