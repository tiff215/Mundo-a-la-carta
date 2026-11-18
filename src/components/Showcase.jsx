import { useRef, useState } from "react";

export function DocumentCard({ titulo, descripcion, archivo, vista }) {
  const visor = useRef(null);
  const imprimir = () => {
    try { visor.current.contentWindow.focus(); visor.current.contentWindow.print(); }
    catch { window.open(archivo, "_blank"); }
  };
  const preview = vista ? (
    <img src={vista} alt={`Vista previa de ${titulo}`} />
  ) : (
    <div className="doc__sheet" aria-hidden="true">
      <strong>{titulo}</strong>
      {[90, 100, 78, 96, 60, 88, 100, 70].map((w, i) => <i key={i} style={{ width: `${w}%` }} />)}
    </div>
  );
  return (
    <article className="doc">
      <div className="doc__head">
        <div>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
        {archivo && (
          <div className="doc__links">
            <button className="doc__link" onClick={imprimir}>Imprimir</button>
            <a className="doc__link" href={archivo} download>Descargar</a>
          </div>
        )}
      </div>
      {archivo ? (
        <>
          <iframe ref={visor} className="doc__viewer" src={`${archivo}#view=FitH`} title={`Documento: ${titulo}`} loading="lazy" />
          <a className="doc__preview doc__preview--movil" href={archivo} target="_blank" rel="noreferrer">{preview}</a>
        </>
      ) : (
        <div className="doc__preview">{preview}</div>
      )}
    </article>
  );
}

export function VideoCard({ titulo, descripcion, youtubeId, driveId, archivo, miniatura }) {
  const dialog = useRef(null);
  const [abierto, setAbierto] = useState(false);
  const hayVideo = Boolean(youtubeId || driveId || archivo);
  const thumb = miniatura || (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : driveId ? `https://drive.google.com/thumbnail?id=${driveId}&sz=w640` : "");
  const abrir = () => { setAbierto(true); dialog.current?.showModal(); };
  return (
    <article className="video">
      <button className="video__thumb" onClick={abrir} disabled={!hayVideo} aria-label={`Reproducir ${titulo}`}>
        {thumb && <img src={thumb} alt="" onError={(e) => (e.currentTarget.style.display = "none")} />}
        <span className="video__play" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
        {!hayVideo && <span className="video__soon">Próximamente</span>}
      </button>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <dialog
        ref={dialog}
        className="modal"
        onClose={() => setAbierto(false)}
        onClick={(e) => e.target === e.currentTarget && dialog.current.close()}
      >
        <button className="modal__close" onClick={() => dialog.current.close()} aria-label="Cerrar">×</button>
        {abierto && (youtubeId || driveId ? (
          <iframe
            src={youtubeId
              ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`
              : `https://drive.google.com/file/d/${driveId}/preview`}
            title={titulo}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <video src={archivo} controls autoPlay />
        ))}
      </dialog>
    </article>
  );
}

export function TeamMember({ nombre, rol, foto }) {
  const iniciales = nombre.split(" ").slice(0, 2).map((p) => p[0]).join("");
  return (
    <li className="member">
      <div className="member__avatar">{foto ? <img src={foto} alt={nombre} /> : <span aria-hidden="true">{iniciales}</span>}</div>
      <h3>{nombre}</h3>
      <p>{rol}</p>
    </li>
  );
}