import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class 숫자판점프 {

    public static final Set<String> set = new HashSet<>();
    // 동남서북
    public static final int[] dx = {0, 1, 0, -1};
    public static final int[] dy = {1, 0, -1, 0};
    public static String[][] graph;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        graph = new String[5][5];
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                graph[i][j] = sc.nextInt() + "";
            }
        }

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                DFS(i, j, 0, "");
            }
        }

        System.out.println(set.size());
    }

    private static void DFS(int x, int y, int level, String res) {
        if (level == 6) {
            set.add(res);
            return;
        }
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            if (nx < 5 && nx >= 0 && ny < 5 && ny >= 0) {
                DFS(nx, ny, level + 1, res + graph[nx][ny]);
            }
        }
    }
}
