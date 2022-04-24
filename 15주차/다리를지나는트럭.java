import java.util.Arrays;
import java.util.LinkedList;
import java.util.Objects;
import java.util.Queue;

public class 다리를지나는트럭 {

    public int solution(int bridge_length, int weight, int[] truck_weights) {
        int answer = 0;
        Queue<Integer> waitTrucks = new LinkedList<>();
        Arrays.stream(truck_weights).forEach(waitTrucks::offer);
        int nowWeight = 0;
        Queue<Integer> bridgeTrucks = new LinkedList<>();
        for (int i = 0; i < bridge_length; i++) {
            bridgeTrucks.offer(0);
        }
        while (!waitTrucks.isEmpty()) {
            answer++;
            Integer outTruck = bridgeTrucks.poll();
            nowWeight -= outTruck;
            // 현재 다리의 무게와 다음에 올라와야할 트럭의 무게가 다리의 허용 무게를 초과하지 않으면
            // 트럭을 다리에 추가하는 작업.
            if (nowWeight + waitTrucks.peek() <= weight) {
                Integer truck = waitTrucks.poll();
                nowWeight += truck;
                bridgeTrucks.offer(truck);
            } else {
                bridgeTrucks.offer(0);
            }
        }

        while (nowWeight > 0) {
            nowWeight -= bridgeTrucks.poll();
            answer++;
        }

        return answer;
    }

    public static void main(String[] args) {
        다리를지나는트럭 solution = new 다리를지나는트럭();
        int bridge_length = 2;
        int weight = 10;
//        int[] truck_weights = {7, 4, 5, 6};
//
//        System.out.println(solution.solution(bridge_length, weight, truck_weights));
        bridge_length = 100;
        weight = 100;
        int[] truck_weights = {10,10,10,10,10,10,10,10,10,10};
        System.out.println(solution.solution(bridge_length, weight, truck_weights));
    }
}
