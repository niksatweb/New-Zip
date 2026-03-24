import { ButtonIcon } from "@/5_shared/ui/buttons"

export const AskQuestionButton = ({ className }: { className?: string }) => {
  return (
    <ButtonIcon href="#" className={className ?? ""}>
      Задать вопрос
    </ButtonIcon>
  )
}
