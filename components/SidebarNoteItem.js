import dayjs from 'dayjs';
import SidebarNoteItemContent from '@/components/SidebarNoteItemContent';

export default function SidebarNoteItem({ noteId, note}) {

    const { title, content = '', updateTime } = note;
    return (
      <SidebarNoteItemContent
        id={noteId}
        title={note.title}
        // fn={() => {}} 服务端组件传递给客户端组件的数据必须可序列化
        expandedChildren={
          <p className="sidebar-note-excerpt">
            {content.substring(0, 20) || <i>(No content)</i>}
          </p>
        }>
            {/* 可以通过props的形式传递服务端组件 */}
        <header className="sidebar-note-header">
          <strong>{title}</strong>
          <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
        </header>
      </SidebarNoteItemContent>
    );
  }