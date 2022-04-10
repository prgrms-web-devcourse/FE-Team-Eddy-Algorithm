import java.util.PriorityQueue;
import java.util.Queue;

public class 방금그곡 {

    class MusicInfo implements Comparable<MusicInfo> {
        String title;
        String score;
        int playTime;

        MusicInfo(String[] musicInfo) {
            String[] startTime = musicInfo[0].split(":");
            String[] endTime = musicInfo[1].split(":");
            int startMinute = Integer.parseInt(startTime[0]) * 60 + Integer.parseInt(startTime[1]);
            int endMinute = Integer.parseInt(endTime[0]) * 60 + Integer.parseInt(endTime[1]);
            this.playTime = endMinute - startMinute;
            this.title = musicInfo[2];
            this.score = replaceScore(musicInfo[3], 5);
        }

        @Override
        public int compareTo(MusicInfo o) {
            return this.playTime <= o.playTime ? 1 : -1;
        }
    }

    public static String replaceScore(String score, int size) {
        String[] replaceList = {"H", "I", "J", "K", "L"};
        String[] changeList = {"A#", "C#", "D#", "F#", "G#"};
        for (int i = 0; i < size; i++) {
            score = score.replace(changeList[i], replaceList[i]);
        }
        return score;
    }

    //
    public String solution(String m, String[] musicInfos) {
        Queue<MusicInfo> result = new PriorityQueue<>();
        m = replaceScore(m, 5);
        for (String musicInfo : musicInfos) {
            MusicInfo music = new MusicInfo(musicInfo.split(","));
            int scoreLength = music.score.length();
            StringBuilder playScore = new StringBuilder();
            for (int i = 0; i < music.playTime; i++) {
                char c = music.score.charAt(i % scoreLength);
                playScore.append(c);
            }
            if (playScore.toString().contains(m)) result.offer(music);
        }
        return result.size() == 0 ? "(None)" : result.poll().title;
    }

    public static void main(String[] args) {
        String m = "ABCDEFG";
        String[] musicInfos = {"12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"};
        System.out.println(new 방금그곡().solution(m, musicInfos));
        m = "CC#BCC#BCC#BCC#B";
        musicInfos = new String[]{"03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"};
        System.out.println(new 방금그곡().solution(m, musicInfos));
    }
}
