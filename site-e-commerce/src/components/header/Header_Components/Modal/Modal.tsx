import PropTypes from 'prop-types';

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="modal">
      <div>I am a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
