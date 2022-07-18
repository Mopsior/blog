import dayjs from 'dayjs'

export default function Date({ iso }) {
    return (
        <p>Utworzono: {dayjs(iso).format('D.MM.YYYY').toString()}</p>
    )
}