package com.example.lit.service.message;

import com.example.lit.domain.vo.messsage.MessageDTO;
import com.example.lit.domain.vo.messsage.MessageRoom;
import com.example.lit.domain.vo.messsage.MessageVO;
import com.example.lit.domain.vo.user.UserVO;

import java.util.List;
import java.util.Map;

public interface MessageService {
    //메세지 룸 생성
    public void register(MessageVO messageVO);

    //메세지 리스트 띄우기
    public List<MessageVO> getList(String roomId);

    //메세지 할 팔로워 목록 불러오기
    public List<UserVO> getFollowerList(Long userNumber);

    //메세지 한 유저 목록 중복 제거하고 받아오기
    public List<Long> getReceiveUserNumber(Long sendUserNumber);

    //메세지 한 유저와의 제일 최근 메세지 불러오기
    public Map<String, Object> getRecentMessage(Long receiveUserNumber);

    //팔로워 리스트 검색
    public List<UserVO> searchFollower(String keyword, Long userNumber);

    //메세지 리스트 뽑아오기
    public List<MessageDTO> getMessageList(MessageDTO messageDTO);

    //새 방 만들기
    public void newRoom(MessageRoom messageRoom);

    //방 db 조회
    public int findRoom(Long sendUserNumber, Long receiveUserNumber);

    public MessageRoom getRoom(Long sendUserNumber, Long receiveUserNumber);

    //나에게 보낸 유저 번호
    public List<Long> getSendUserNumber(Long receiveUserNumber);

    //받은 메세지 중 가장 최근 메세지
    public Map<String, Object> getRecentReceiveMessage(Long sendUserNumber);
}
