import java.util.*;

public class 가장먼노드 {

    public int solution(int n, int[][] vertex) {
        int answer = 0;

        // 그래프 만들기
        // 인접 리스트로 만듬.
        List<List<Integer>> graph = new ArrayList<>();

        // 0번 사용 안함.
        graph.add(new ArrayList<>());

        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int[] node : vertex) {
            int a = node[0];
            int b = node[1];
            graph.get(a).add(b);
            graph.get(b).add(a);
        }
        int[] bfs = BFS(graph);
        int max = Arrays.stream(bfs).max().getAsInt();
        answer = (int) Arrays.stream(bfs).filter(v -> v == max).count();

        return answer;
    }

    public int[] BFS(List<List<Integer>> graph) {
        // 여기다 각 노드의 레벨을 저장한다.
        int[] counts = new int[graph.size()];
        int level = 0;
        // 방문 체크할 배열
        boolean[] isVisit = new boolean[graph.size()];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        isVisit[1] = true;
        while (!queue.isEmpty()) {
            int qSize = queue.size();
            for (int i = 0; i < qSize; i++) {
                Integer node = queue.poll();
                List<Integer> nodes = graph.get(node);
                for (int n : nodes) {
                    if (!isVisit[n]) {
                        isVisit[n] = true;
                        queue.offer(n);
                        counts[n] = level + 1;
                    }
                }
            }
            level++;
        }

        return counts;
    }

    public static void main(String[] args) {
        int n = 6;
        int[][] vertex = {{3, 6}, {4, 3}, {3, 2}, {1, 3}, {1, 2}, {2, 4}, {5, 2}};

        System.out.println(new 가장먼노드().solution(n, vertex));
    }
}
