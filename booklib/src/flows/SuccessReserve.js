import { LinkButton } from './common.js'

function SuccessReserve() {
    return (
        <>
            <div className="px-3">
                <h1>预约成功</h1>
            </div>
            <div className="px-3 mt-3 h2 fw-normal">
                <p>您可以在 1pm 前取消预约。</p>
            </div>
            <div className="h3 d-flex justify-content-end">
                <LinkButton className="text-muted">查看当前预约 <i className="bi bi-arrow-right"></i></LinkButton>
            </div>
            <div className="h3 d-flex justify-content-end">
                <LinkButton className="text-muted">继续预约 <i className="bi bi-arrow-right"></i></LinkButton>
            </div>
            <div className="h3 d-flex justify-content-end">
                <LinkButton className="text-muted">人流密度 <i className="bi bi-arrow-right"></i></LinkButton>
            </div>
        </>
    )
}

export default SuccessReserve